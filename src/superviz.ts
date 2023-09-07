import SuperViz, { MeetingEvent, RealtimeMessage } from "@superviz/sdk";

import { MatterportPlugin } from "@superviz/matterport-plugin";

import { faker } from '@faker-js/faker';
import { MpSdk } from "../bundle/sdk";

import { renderTag } from "./lib";

const _token = '080agm5y1f8054324du6b9mxbdkxe0'

const enum ROLE{
    HOST = 'host',
    GUEST = 'guest',
}

async function startMeeting(payload: {sdk: MpSdk, roomId: string, role: string}){

    console.log('superviz: startMeeting()', payload)

    if(!payload.roomId){
        console.error('roomId is undefined')
        return 
    }

    if(!payload.role){
        console.error('role is undefined')
        return 
    }

    if(payload.role !== ROLE.HOST && payload.role !== ROLE.GUEST){
        console.error('role unknown')
        return 
    }

    const supervizSdk = await SuperViz.init(_token, {
        group: {
          	id: "<GROUP-ID>",
          	name: "<GROUP-NAME>",
        },
        participant: {
          	id: faker.string.uuid(),
          	name: faker.person.firstName(),
          	type: payload.role,
        },

		defaultAvatars: true,
        roomId: payload.roomId,
        debug: false,
      });


      setListeners(payload.sdk, supervizSdk)

      return supervizSdk

}


async function setListeners(mpSdk: MpSdk, supervizSdk: any){

    supervizSdk.subscribe('render-tag', async(events: RealtimeMessage[]) => {
        console.log("=== superviz: events ===", events);

        const tag = events[0]['data']

        await renderTag({sdk: mpSdk, tag: tag})

    });

    // @ts-ignore
    const plugin = new MatterportPlugin(mpSdk);

    let matterportPluginInstance
      
    supervizSdk.subscribe(MeetingEvent.MY_PARTICIPANT_JOINED, () => {
      matterportPluginInstance = supervizSdk.loadPlugin(plugin, {
        avatarConfig: {
          height: 0,
          scale: 1,
          laserOrigin: { x: 0, y: 0, z: 0 },
        },
        isAvatarsEnabled: true,
        isLaserEnabled: true,
        isNameEnabled: true,
      });
  });

}


export {
    startMeeting
}