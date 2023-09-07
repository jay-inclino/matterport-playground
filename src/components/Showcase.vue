<template>
    <div>
      <header>
        <h1>ARCHITWIN SANDBOX</h1>
        <a target="_blank" href="https://www.npmjs.com/package/architwin">Documentation</a>
      </header>
      <div class="test">
        <table width="100%" id="app">
          <tr>
            <td>
              <div class="at_showcase_container" id="showcase-container" style="position: relative;">
                <iframe id="mp-showcase" class="showcase" scrolling="no" width="100%" height="700" frameborder="0"
                  allow="xr-spatial-tracking" allowfullscreen></iframe>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div class="container" style="height: 700px">
        <div class="columns" v-if="meetingRoomId !== ''">
          <div class="column">
            <span class="has-text-white">
              Room ID: <span class="has-text-success">{{ meetingRoomId }}</span>
            </span>
            <button @click="copyRoomId()" class="button is-white is-small ml-3">
              Copy Room ID
            </button>
          </div>
        </div>
        <div class="columns" v-if="meetingRole !== ''">
          <div class="column">
            <span class="has-text-white">
              Role: <span class="has-text-success">{{ meetingRole }}</span>
            </span>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="buttons">
              <button @click="renderTag()" class="button is-primary">
                Render Tag
              </button>
              <button @click="startMeeting()" class="button is-primary">
                Start Meeting 
              </button>

              <button @click="joinMeeting()" class="button is-primary">
                Join meeting 
              </button>

            </div>
          </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <script setup lang="ts">
    
    import { onMounted, ref } from 'vue';
    import * as atwin from '../lib';
    import { MpSdk } from '../../bundle/sdk';
    import { faker } from '@faker-js/faker';

    const iframeId = 'mp-showcase'
    const spaceUrl = "https://my.matterport.com/show/?m=qSGGhhjTYbN"
    const sdk = ref<MpSdk|null>(null)

    const meetingRoomId = ref('')
    const meetingRole = ref('')

    onMounted( async() => {
        sdk.value = await atwin.connectSpace({iframeId, spaceUrl})

        console.log('=== sdk ===', sdk.value)
        console.log('=== SPACE IS PLAYING ===')

        await isMeetingInitialize()

    })

    async function isMeetingInitialize(){
      const urlParams = new URLSearchParams(window.location.search);
      console.log('urlParams', urlParams)
      const roomId = urlParams.get('roomId');
      const role = urlParams.get('role');
      console.log('roomId', roomId)
      console.log('role', role)

      if(roomId && role){
        meetingRoomId.value = roomId
        meetingRole.value = role
        atwin.startMeeting({sdk: sdk.value, roomId: roomId, role: role})
      }
    }

    async function renderTag(){
      console.log('=== renderTag() ===')

      if(!sdk.value){
        console.error('sdk.value is undefined')
        return 
      }

      const tag:MpSdk.Tag.Descriptor = {
        label: 'New Tag',
        description: 'This is a description',
        stemVector: {
          x: 0,
          y: 0.30,
          z: 0,
        },
        anchorPosition: {
          x: 0,
          y: 0,
          z: 0,
        },
      }

      await atwin.renderTag({sdk: sdk.value, tag, relocate: true})
    }

    async function startMeeting(){
      console.log('=== startMeeting() ===')

      meetingRoomId.value = faker.string.uuid()
      window.location.href = `?roomId=${meetingRoomId.value}&role=host`

      // await atwin.startMeeting({sdk: sdk.value, roomId: meetingRoomId.value})
    }

    async function joinMeeting(){
      console.log('=== joinMeeting() ===')

      const inp = window.prompt("Enter roomID")

      if(!inp || inp === ''){
        console.log('User cancelled the prompt')
      }else{
        window.location.href = `?roomId=${inp}&role=guest`
      }

    }

    function copyRoomId(){
      navigator.clipboard.writeText(meetingRoomId.value)
      alert("RoomId copied!")
    }


  </script>
  
  <style>
  
  .is-disabled{
    background-color: gray; 
    color: white;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
    margin: 0 100px 0 100px;
  }
  
  .grid-container-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .grid-container-row-center{
    display: flex;
    justify-content: center;
  }
  
  .grid-item {
    padding: 20px;
    text-align: center;
  }
  
  .grid-item-no-padding {
    text-align: center;
  }
  
  .field {
      display: block;
      width: 11em;
      padding: 0.5rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #fff;
      background-color: #333;
      background-clip: padding-box;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      margin-bottom: 8px;
    }
  
  .field-sm {
      display: block;
      width: 2em;
      padding: 0.5rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #fff;
      background-color: #333;
      background-clip: padding-box;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      margin-bottom: 8px;
    }
  
  .field:focus {
    outline: none;
    border-color: #66afe9;
    box-shadow: 0 0 0 0.2rem rgba(102, 175, 233, 0.5);
  }
  
  .tw-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background-color 0.15s ease-in-out;
    width: 100%
  }
  
  .tw-button-small {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background-color 0.15s ease-in-out;
    width: 11em;
  }
  
  .tw-button:hover {
    background-color: #457B9D;
  }
  
  .bg-blue {
    background-color: #3490dc;
    color: #fff;
  }
  
  .bg-red {
    background-color: #e3342f;
    color: #fff;
  }
  
  .bg-green {
    background-color: #38c172;
    color: #fff;
  }
  
  .bg-cerulean {
    background-color: #457B9D;
    color: #fff
  }
  
  .bg-cinnabar {
    background-color: #f4442e;
    color: #fff;
  }
  
  .bg-grey {
    background-color: #707174;
    color: #fff;
  }
  
  .flex-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    /* Set a height for demonstration purposes */
  }
  
  .flex-item {
    padding: 10px;
    margin: 10px;
  }
  
  body {
    font-family: 'Consolas', sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.4;
    background: #000;
    padding: 0;
    margin: 0;
  }
  
  header {
    line-height: 80px;
    background-color: #222222;
    color: #fff;
    padding: 0 40px;
    display: flex;
    flex-direction: row;
  }
  
  header h1 {
    padding: 0;
    margin: 0;
    font-weight: 100;
    line-height: 80px;
    font-size: 24px;
    float: left;
    width: 75%;
  }
  
  header a {
    width: 25%;
    float: left;
    text-align: right;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }
  
  article {
    margin: 40px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgb(43, 43, 43, 0.25);
  }
  
  #buttons {
    padding: 0 10px
  }
  
  #buttons button {
    line-height: 20px;
    padding: 0 20px;
    width: 70%;
    display: block;
    cursor: pointer;
    margin: 15px 15px 0px 15px;
    border-radius: 10px;
    padding: 5px 20px;
    background-color: #353535;
    text-decoration: none;
    border: none;
    color: #eee;
    font-size: 10pt;
    line-height: 20px;
    transition: background-color 0.25s, color 0.25s;
  }
  
  #buttons button:hover {
    background-color: #ff3158;
    cursor: pointer;
    color: rgb(19, 19, 19);
  }
  
  footer {
    background-color: #222222;
    color: #fff;
    padding: 40px;
    font-size: 18px;
  }
  
  footer>* {
    display: block;
    margin: 0px auto 1.5em auto;
    max-width: 960px;
    line-height: 1.5em;
    font-size: 14px;
  }
  
  footer h2 {
    font-size: 24px;
  }
  
  header a,
  footer a {
    color: #ff3158;
  }
  
  article {
    text-align: center;
  }
  
  iframe {
    border: 1px solid #333;
    border-radius: 20px;
  }
  
  b {
    color: #00ff00;
  }
  
  #sidebar {
    background-color: #222220;
    border-radius: 0.5em 0em 0em 0.5em;
    padding: 0.5em;
    margin: 2.5px 0 0.5em 2.5px;
    opacity: 1;
  
    display: flex;
    flex-direction: row;
  
    position: relative;
  
    transition: all 0.3s ease-out;
    transition: border-radius 0s;
  }
  
  .initial-sidebar-buttons{
    background-color: #3490dc;
    color: white;
  }
  
  #sidebar-extension {
    background-color: inherit;
    border-radius: 0.5em 0em 0em 0.5em;
    padding: inherit;
    margin: 0;
    
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    bottom: 0;;
    right: 3.5em;
    left: auto;
    height: 99%em;
  
    transition: all 0.3s;
  }
  
  .menu-toggle-wrap {
    display: flex;
    justify-content: end;
    transition: all 0.3 ease-in;
  }
  
  .test {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5em;
  }
  
  
  /*
  .showcase_container {
  position: relative;
  margin: 0 auto 10px auto;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  }
  .map_container { 
  opacity: 0;
  line-height: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  background: #222;
  transition: opacity 0.75s;
  }
  
  body.minimap .map_container {
  opacity: 1;
  }
  
  #map {
  z-index: 99;
  /* width: 100px; */
  /* width: 250px;
  background: rgba(0, 0, 0, 0.5);
  transition: width 0.5s;
  } */
  
  /* #map:hover {
  width: 250px;
  } */
  /* #map img {
  width: 100%;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  }
  #map button {
  position: absolute;
  padding: 0 0;
  margin: 0;
  height: 0.8rem;
  width: 0.8rem;
  margin-top: 0.8rem;
  margin-left: -0.6rem;
  border: 0.1rem solid #353535;
  color: transparent;
  background: #353535;
  opacity: 0.5;
  border-radius: 50%;
  box-sizing: content-box;
  font-size: 10px;
  cursor: pointer;
  transition: border-color 0.5s;
  background: 0.5s;
  opacity: 0.5s; 
  color: 0.5s;
  }
  #map button:hover {
  color: #fff;
  opacity: 1;
  }
  #map button.active {
  background: #ff3158;
  opacity: 1;
  }
  #map button:hover {
  border: 0.1rem solid #ff3158;
  background: #ff3158;
  }
  
  #map.floor0:hover button.floor0,
  #map.floor1:hover button.floor1,
  #map.floor2:hover button.floor2,
  #map.floor3:hover button.floor3,
  #map.floor4:hover button.floor4,
  #map.floor5:hover button.floor5,
  #map.floor6:hover button.floor6,
  #map.floor7:hover button.floor7,
  #map.floor8:hover button.floor8,
  #map.floor9:hover button.floor9,
  #map.floor10:hover button.floor10,
  #map.floor11:hover button.floor11,
  #map.floor12:hover button.floor12,
  #map.floor13:hover button.floor13 {
  display: inline-block;
  } */
  
  .pSquare{
    border-radius: 0% !important;
  }
  
  .pTri{
    width: 0 !important;
    height: 0 !important;
    border-left: 12px solid transparent !important;
    border-right: 12px solid transparent !important;
    border-bottom: 17px solid !important;
    background: transparent !important;
  }
  
  /*
  #map button { display: none }
  #map img { display: none }
  body.f1 #map .floor1 { display: inline-block }
  body.f2 #map .floor2 { display: inline-block }
  */
  .form-container {
    margin: 0 10px;  
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  .meeting-input-lbl{
    color: white;
  }
  
  .meeting-btn{
    margin-left: 25px;
  }
  
  .meeting-btn-small{
    margin-left: 5px;
  }
  
  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }
  
  </style>
  