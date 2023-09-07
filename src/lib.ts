
import { MP_SDK, MpSdk, ShowcaseBundleWindow, Vector3} from "../bundle/sdk";
import { TagPlacer } from "./tagPlacer";

import * as superviz from './superviz'

import { SuperVizSdk } from "@superviz/sdk";

const _config = {
    appKey: 'a3ae8341bd8f44899eba16df86307d7d'
}

let supervizSdk: SuperVizSdk

async function connectSpace(payload: {iframeId: string, spaceUrl: string}) :Promise<MpSdk | null>{

    console.log('connectSpace()', payload)

    const showcase = document.getElementById(payload.iframeId) as HTMLIFrameElement 

    const modelId = getModelId(payload.spaceUrl)

    showcase.src = `../bundle/showcase.html?m=${modelId}&applicationKey=${_config.appKey}&newtags=1&play=1&qs=1`
  
    const showcaseWindow = showcase.contentWindow as ShowcaseBundleWindow;

    let sdk: MpSdk|null = null
  
    showcase.addEventListener("load", async () => {
        sdk = await showcaseWindow.MP_SDK.connect(showcaseWindow);
        // sdk.App.state.waitUntil(state => state.phase === sdk.App.Phase.PLAYING)

        // sdk.Mode.current.subscribe( mode => {
        //     console.log('=== mode ===', mode)
        // } )

    })

    await waitFor()

    return sdk

    async function waitFor() {

        while(!sdk?.App.Phase.PLAYING){
            console.log('== Wait for _atwin ==')
		    await new Promise(resolve => setTimeout(resolve, 1000));
        }

        return true

    }


}

function getModelId(url: string){
    console.log('url', url)
    const modelId = url.split("?m=")[1];

    console.log('modelId', modelId)

    if (!modelId) {
      console.error("modelId is undefined");
      return "";
    }
    return modelId
}

async function renderTag(payload: {sdk: MpSdk, tag: MpSdk.Tag.Descriptor, relocate?: boolean}){

    console.log('__renderTag()', payload)

    const tagIds: string[] = await payload.sdk.Tag.add(payload.tag)

    console.log('__tagIds', tagIds)
    payload.tag['id'] = tagIds[0]

    if(payload.relocate){
        await moveTag({sdk: payload.sdk, tag: payload.tag})
    }

}

async function moveTag(payload: {sdk: MpSdk, tag: any}){

    console.log('__ moveTag()', payload)

    const placer = new TagPlacer(payload.sdk)
    placer.tagDataId = payload.tag['id']

    const onClick = (anchorPosition: Vector3, stemVector: Vector3) => {
        console.log('__@ onClick()')
        console.log('__@ anchorPosition', anchorPosition)
        console.log('__@ stemVector', stemVector)
        payload.tag.anchorPosition = anchorPosition
        payload.tag.stemVector = stemVector 

        supervizSdk.setSyncProperty('render-tag', payload.tag);
        console.log('supervizSdk.setSyncProperty')
    }

    await placer.moveTag(onClick)
}

async function startMeeting(payload: {sdk: any, roomId: string, role: string}){
    supervizSdk = await superviz.startMeeting({sdk: payload.sdk, roomId: payload.roomId, role: payload.role})
}

export {
    connectSpace,
    renderTag,
    startMeeting,
}