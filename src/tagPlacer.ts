import type { IObserver, ISubscription, MpSdk, Pointer, Scene, Vector3 } from '../bundle/sdk'

export class TagPlacer implements Scene.IComponentEventSpy, IObserver<Pointer.Intersection>{

    mpSdk!: MpSdk
    tagDataId!: string
    eventType!: string
    tagPointer!: ISubscription
    input!: Scene.IComponent
    stemScalar: number = .33
    inputNode!: Scene.INode
    anchorPosition: Vector3 = {x:0,y:0,z:0}
    stemVector: Vector3 = {x:0,y:0,z:0}
    callbackFunc: any

    constructor(mpSdk: MpSdk){
        this.mpSdk = mpSdk
    }

    async onEvent(): Promise<void> { // triggers when the tag is placed
        console.log('TagEvent onEvent()')
        try {
            this.tagPointer?.cancel()
            setTimeout(() => this.input!.inputs!.userNavigationEnabled = true, 300)
            this.inputNode.stop()
            await this.mpSdk.Mattertag.navigateToTag(this.tagDataId, this.mpSdk.Mattertag.Transition.FLY)
            this.callbackFunc(this.anchorPosition, this.stemVector)
    } catch (error) {
            console.error(`onChange: ${error}`)
        }
    }

    onChanged(data: Pointer.Intersection): void { // tag is currently moving
        console.log('TagEvent onChanged()')
        try {
            const stemVector = {
                x: data.normal.x * this.stemScalar,
                y: data.normal.y * this.stemScalar,
            z: data.normal.z * this.stemScalar,
            }
            
            const anchorPosition = {...data.position}

            this.mpSdk.Tag.editPosition(this.tagDataId, {
                anchorPosition: anchorPosition,
                stemVector: {...stemVector},
            })

            this.anchorPosition = anchorPosition 
            this.stemVector = {...stemVector} 

        } catch (error) {
            console.error(`onChange: ${error}`)
        }
    }

    async setupInput(){ // initialization
        console.log('TagEvent setupInput()')
        this.inputNode = await this.mpSdk.Scene.createNode()
        this.input = this.inputNode.addComponent('mp.input')
        this.inputNode.start()
        this.input.spyOnEvent(this)
    }

    async moveTag(callback: any): Promise<void>{ // function to be called in mp store
        console.log('TagEvent moveTag()')
        this.eventType = "INTERACTION.POINTER_BUTTON"
        this.callbackFunc = callback 
        await this.setupInput()
        this.input!.inputs!.userNavigationEnabled = false;
        this.tagPointer = this.mpSdk.Pointer.intersection.subscribe(this)
    }
    
}