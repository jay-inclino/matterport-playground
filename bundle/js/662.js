/*! For license information please see 662.js.LICENSE.txt */
"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[662],{4061:(e,t,o)=>{var s=o(43842);function n(e,t,o){var n,r,d,l;t=t||1;for(var h=0;h<e[0].length;h++){var c=e[0][h];(!h||c[0]<n)&&(n=c[0]),(!h||c[1]<r)&&(r=c[1]),(!h||c[0]>d)&&(d=c[0]),(!h||c[1]>l)&&(l=c[1])}var u=d-n,g=l-r,p=Math.min(u,g),f=p/2;if(0===p){var w=[n,r];return w.distance=0,w}for(var m=new s(void 0,a),_=n;_<d;_+=p)for(var v=r;v<l;v+=p)m.push(new i(_+f,v+f,f,e));var b=function(e){for(var t=0,o=0,s=0,n=e[0],a=0,r=n.length,d=r-1;a<r;d=a++){var l=n[a],h=n[d],c=l[0]*h[1]-h[0]*l[1];o+=(l[0]+h[0])*c,s+=(l[1]+h[1])*c,t+=3*c}return 0===t?new i(n[0][0],n[0][1],0,e):new i(o/t,s/t,0,e)}(e),I=new i(n+u/2,r+g/2,0,e);I.d>b.d&&(b=I);for(var W=m.length;m.length;){var N=m.pop();N.d>b.d&&(b=N,o&&console.log("found best %d after %d probes",Math.round(1e4*N.d)/1e4,W)),N.max-b.d<=t||(f=N.h/2,m.push(new i(N.x-f,N.y-f,f,e)),m.push(new i(N.x+f,N.y-f,f,e)),m.push(new i(N.x-f,N.y+f,f,e)),m.push(new i(N.x+f,N.y+f,f,e)),W+=4)}o&&(console.log("num probes: "+W),console.log("best distance: "+b.d));var x=[b.x,b.y];return x.distance=b.d,x}function a(e,t){return t.max-e.max}function i(e,t,o,s){this.x=e,this.y=t,this.h=o,this.d=function(e,t,o){for(var s=!1,n=1/0,a=0;a<o.length;a++)for(var i=o[a],d=0,l=i.length,h=l-1;d<l;h=d++){var c=i[d],u=i[h];c[1]>t!=u[1]>t&&e<(u[0]-c[0])*(t-c[1])/(u[1]-c[1])+c[0]&&(s=!s),n=Math.min(n,r(e,t,c,u))}return 0===n?0:(s?1:-1)*Math.sqrt(n)}(e,t,s),this.max=this.d+this.h*Math.SQRT2}function r(e,t,o,s){var n=o[0],a=o[1],i=s[0]-n,r=s[1]-a;if(0!==i||0!==r){var d=((e-n)*i+(t-a)*r)/(i*i+r*r);d>1?(n=s[0],a=s[1]):d>0&&(n+=i*d,a+=r*d)}return(i=e-n)*i+(r=t-a)*r}s.default&&(s=s.default),e.exports=n,e.exports.default=n},43842:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});class s{constructor(e=[],t=n){if(this.data=e,this.length=this.data.length,this.compare=t,this.length>0)for(let e=(this.length>>1)-1;e>=0;e--)this._down(e)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(0===this.length)return;const e=this.data[0],t=this.data.pop();return this.length--,this.length>0&&(this.data[0]=t,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:t,compare:o}=this,s=t[e];for(;e>0;){const n=e-1>>1,a=t[n];if(o(s,a)>=0)break;t[e]=a,e=n}t[e]=s}_down(e){const{data:t,compare:o}=this,s=this.length>>1,n=t[e];for(;e<s;){let s=1+(e<<1),a=t[s];const i=s+1;if(i<this.length&&o(t[i],a)<0&&(s=i,a=t[i]),o(a,n)>=0)break;t[e]=a,e=s}t[e]=n}}function n(e,t){return e<t?-1:e>t?1:0}},42605:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ee});var s=o(97542),n=o(89570),a=o(35221),i=o(5823),r=o(80742),d=o(63422),l=o(38399),h=o(71166),c=o(56163),u=o(76957);class g extends c.K{constructor(e,t,o,s){super(e,t),this.room=o,this.id=this.room.id,this.title=this.room.getRoomLabel(),this.icon="icon-edit-floorplan",this.typeId=i.SF.MODELROOM,this.layerId=d.gi,this.dateBucket=a.Z.OLDER,this.enabled=!0,this.floorId=s}}var p=o(81396),f=o(46391),w=o(78283),m=o(4061),_=o.n(m);function v(e){const t=e.map((e=>[e.x,e.z]));return t.push(t[0]),function(e,t=!1){let o=0;for(let t=0,s=e.length;t<s;t++){const n=e[t],a=e[t===s-1?0:t+1];o+=n[0]*a[1],o-=a[0]*n[1]}return t?o/2:Math.abs(o/2)}(t)}class b{constructor(e,t,o,s,n="Unknown",a=!0){this.id=e,this.name=t,this.points=o,this.walls=s,this.roomType=n,this.useRoomTypeAsName=a}get floorIndex(){return this.points[0].floorIndex}getSnapshot(){return{height:0,lowerElevation:0,source:"frontend",vertices:this.points.map((e=>e.id))}}getViewCenter(){const e=this.points.map((e=>[e.x,e.z]));e.push([this.points[0].x,this.points[0].z]);const t=_()([e],.1);return new p.Vector3(t[0],0,t[1])}getArea(){return v(this.points)}getAreaText(e){let t=this.getArea();e===f.M.IMPERIAL&&(t=(0,w.Nv)(t));const o=e===f.M.IMPERIAL?" sq ft":" sq m";return Math.round(t)+o}getRoomLabel(){return this.useRoomTypeAsName?this.roomType:this.name}}var I=o(92558);class W{constructor(e,t,o,s,n){this.bias=.5,this.openings=[],this._t1=new p.Vector3,this._t2=new p.Vector3,this.id=e,this.from=t,this.to=o,this.width=s,this.bias=n}static getCompositeKey(e,t){const o=[e,t].sort();return`${o[0]}:${o[1]}`}get floorIndex(){return this.from.floorIndex}getOtherNode(e){if(e===this.from)return this.to;if(e===this.to)return this.from;throw new Error("WallNode does not belong to edge.")}hasNodes(e,t){const{from:o,to:s}=this;return!(e!==o&&e!==s||t!==o&&t!==s)}getBiasAdjustmentVec(e=new p.Vector3){this.getNormal(e);const t=(this.bias-.5)*-this.width;return e.multiplyScalar(t),e}getNormal(e=new p.Vector3){return this.getDirection(e),e.normalize(),e.set(-e.z,0,e.x),e}getDirection(e){const t=e||new p.Vector3;return t.set(this.to.x-this.from.x,0,this.to.z-this.from.z),t}getProjection(e){const t=this._t1.copy(e).sub(this.from.getVec3(this._t2)),o=this.getDirection(this._t2);return t.dot(o)/o.length()}getSnapshot(){const e={thickness:this.width};if(this.openings.length){const t={};for(const e of this.openings)t[e.id]=e.getSnapshot();e.openings=t}return e}getViewCenter(){return(new p.Vector3).addVectors(this.to.getVec3(),this.from.getVec3()).multiplyScalar(.5)}get length(){const e=this.from.x-this.to.x,t=this.from.z-this.to.z;return Math.sqrt(e*e+t*t)}clone(){const e=new W(this.id,this.from,this.to,this.width,this.bias);return e.openings.push(...this.openings),e}}class N{constructor(e,t,o,s){this.id=e,this.floorIndex=t,this.x=o,this.z=s}getPoint(){return{x:this.x,z:this.z}}getVec3(e){const t=e||new p.Vector3;return t.set(this.x,0,this.z),t}getViewCenter(){return this.getVec3()}getSnapshot(){return{x:this.x,y:-this.z}}}var x=o(83021);class y{constructor(e){this.afterAction=e,this.actions=[]}run(){for(const e of this.actions)e.run(),this.afterAction()}invert(){for(let e=this.actions.length-1;e>=0;e--){this.actions[e].invert(),this.afterAction()}}merge(e){if(0===this.actions.length)this.actions.push(e);else{const t=this.actions[this.actions.length-1];t&&t.merge(e)||this.actions.push(e)}return!0}}class O{constructor(e){this.afterAction=e,this.undoBuffer=new x.P(50),this.finalized=!1}push(e){(this.undoBuffer.isEmpty()||this.finalized)&&(this.undoBuffer.push(new y(this.afterAction)),this.finalized=!1);const t=this.undoBuffer.peek();t&&t.merge(e)}pop(){return this.undoBuffer.pop()}finalize(){this.finalized=!0}availableUndos(){return this.undoBuffer.count}}var R,P=o(35895),C=o(97998);function E(e,t){let o,s,n=t[t.length-1],a=0;for(let i=0;i<t.length;++i)o=n,n=t[i],o.y<=e.y&&n.y<=e.y||o.y>e.y&&n.y>e.y||o.x<e.x&&n.x<e.x||(s=(e.y-o.y)*(n.x-o.x)-(e.x-o.x)*(n.y-o.y),n.y<o.y&&(s=-s),a+=s>0?1:0);return a%2==1}function T(e,t){return e.size===t.size&&[...e].every((e=>t.has(e)))}!function(e){e.DOOR="door",e.OPENING="opening"}(R||(R={}));class z{constructor(e,t,o,s,n){this.id=e,this.wallId=t,this.type=o,this.relativePos=s,this.width=n}get floorIndex(){return-1}getViewCenter(){return new p.Vector3(0,0,0)}getSnapshot(){const{type:e,relativePos:t,width:o}=this;return{lowerElevation:0,height:0,type:e,relativePos:t,width:o}}}class A{constructor(){this.data=new Map,this.addedObservers=new Set,this.updatedObservers=new Set,this.deletedObservers=new Set}clear(){this.data.clear()}get(e){return this.data.get(e)}set(e,t){this.data.set(e,t)}delete(e){this.data.delete(e)}has(e){return this.data.has(e)}onChanged(e){return(0,P.k1)((()=>{e.onAdded&&this.addedObservers.add(e.onAdded),e.onUpdated&&this.updatedObservers.add(e.onUpdated),e.onRemoved&&this.deletedObservers.add(e.onRemoved)}),(()=>{e.onAdded&&this.addedObservers.delete(e.onAdded),e.onUpdated&&this.updatedObservers.delete(e.onUpdated),e.onRemoved&&this.deletedObservers.delete(e.onRemoved)}),!0)}}class F{constructor(e,t){this.data=e,this.inputs=t,this._outputCache=null}onRun(e){throw new Error("Method not implemented.")}onInvert(e,t){throw new Error("Method not implemented.")}run(){this._outputCache=this.onRun(this.inputs)}invert(){if(!this._outputCache)throw new Error("Attempted to inverse a data action before running it");this.onInvert(this._outputCache,this.inputs),this._outputCache=null}merge(e){return!1}get output(){if(this._outputCache)return this._outputCache;throw new Error("Tried to read output of an action before it was run")}}class M extends F{onRun(e){const t=this.data.getNode(e.nodeId),o={x:t.x,z:t.z};return this.data._updateNode(e.nodeId,e.newPos),this.data._updateWallForNodes(t),{prevPos:o}}onInvert(e,t){this.data._updateNode(t.nodeId,e.prevPos);const o=this.data.getNode(t.nodeId);this.data._updateWallForNodes(o)}merge(e){return e instanceof M&&e.inputs.nodeId===this.inputs.nodeId&&(this.inputs.newPos=e.inputs.newPos,!0)}}class S extends F{onRun(e){const t=this.data._createNode(e.from,e.floorIndex),o=this.data._createNode(e.to,e.floorIndex),s=this.data._createWall(t,o,e.width,[],.5);return{fromId:t.id,toId:o.id,wall:s.id}}onInvert(e,t){this.data._deleteWall(e.wall),this.data._deleteNode(e.fromId),this.data._deleteNode(e.toId)}merge(e){return!!(e instanceof M&&this._outputCache&&e.inputs.nodeId===this._outputCache.toId)&&(this.inputs.to=e.inputs.newPos,!0)}}class V extends F{onRun(e){const t=this.data.getWall(e.wallId),o=t.from.getPoint(),s=t.to.getPoint();return this.data._updateNode(t.from.id,e.newFromPos),this.data._updateNode(t.to.id,e.newToPos),this.data._updateWallForNodes(t.from,t.to),{prevFromPos:o,prevToPos:s}}onInvert(e,t){const o=this.data.getWall(t.wallId);this.data._updateNode(o.from.id,e.prevFromPos),this.data._updateNode(o.to.id,e.prevToPos),this.data._updateWallForNodes(o.from,o.to)}merge(e){return e instanceof V&&e.inputs.wallId===this.inputs.wallId&&(this.inputs.newFromPos=e.inputs.newFromPos,this.inputs.newToPos=e.inputs.newToPos,!0)}}class B extends F{onRun(e){const t=this.data.getNode(e.fromId),o=this.data._createNode(e.to,t.floorIndex),s=this.data._createWall(t,o,e.width,[],.5);return{toId:o.id,wall:s.id}}onInvert(e,t){this.data._deleteWall(e.wall),this.data._deleteNode(e.toId)}merge(e){return!!(e instanceof M&&this._outputCache&&e.inputs.nodeId===this._outputCache.toId)&&(this.inputs.to=e.inputs.newPos,!0)}}function D(e,t,o){const s=new p.Line3(e.from.getVec3(),e.to.getVec3()),n=t.map((e=>({wall:e,line:new p.Line3(e.from.getVec3(),e.to.getVec3())}))),a=(e,t)=>{const o=e.closestPointToPointParameter(t,!1);if(!(o<0||o>1))return o};for(const t of e.openings){const{type:e,width:i,relativePos:r,id:d}=t,l=s.at(r,new p.Vector3);for(const{wall:t,line:s}of n){const n=a(s,l);if(void 0!==n){o._createWallOpening(t,e,n,i,d);break}}}}class k extends F{onRun(e){const t=this.data.getNode(e.mergeId),o=this.data.getNode(e.keepId),s=o.getPoint();this.data._updateNode(o.id,t.getPoint());const n=this.data.getWallsForNode(t),a=[];for(const e of n){const s=e.clone(),n=e.getOtherNode(t),i=e.width;this.data._deleteWall(e.id);let r=null;this.needsReplacementWall(e,t,o)&&(r=this.data._createWall(n,o,i,[],e.bias),D(e,[r],this.data)),a.push({deleted:s,created:r})}return this.data._deleteNode(t.id),this.data._updateWallForNodes(t,o),{deletedNode:t,wallDiff:a,oldKeepNodePos:s}}onInvert(e,t){const o=e.deletedNode,s=this.data._createNode(o.getPoint(),o.floorIndex,o.id);for(const t of e.wallDiff)t.created&&this.data._deleteWall(t.created.id),this.data._createWall(s,t.deleted.getOtherNode(e.deletedNode),t.deleted.width,t.deleted.openings,t.deleted.bias);this.data._updateNode(t.keepId,e.oldKeepNodePos),this.data._updateWallForNodes(s,this.data.getNode(t.keepId))}needsReplacementWall(e,t,o){const s=e.getOtherNode(t);if(s===o)return!1;const n=W.getCompositeKey(s.id,o.id);return!this.data.walls.has(n)}}class L extends F{onRun(e){const t=this.data.getWall(e.wallId).clone(),o=this.data.getEdgeCountForNode(t.from),s=this.data.getEdgeCountForNode(t.to);this.data._deleteWall(e.wallId);let n="none";return 1===o&&1===s?(n="both",this.data._deleteNode(t.from.id),this.data._deleteNode(t.to.id)):1===o?(n="from",this.data._deleteNode(t.from.id),this.data._updateWallForNodes(t.to)):1===s?(n="to",this.data._deleteNode(t.to.id),this.data._updateWallForNodes(t.from)):(n="none",this.data._updateWallForNodes(t.from,t.to)),{deletedWall:t,deletedNodes:n}}onInvert(e,t){const o=e.deletedWall;let s,n;switch(e.deletedNodes){case"both":s=this.data._createNode({x:o.from.x,z:o.from.z},o.floorIndex,o.from.id),n=this.data._createNode({x:o.to.x,z:o.to.z},o.floorIndex,o.to.id),this.data._createWall(s,n,o.width,o.openings,o.bias);break;case"none":this.data._createWall(o.from,o.to,o.width,o.openings,o.bias),this.data._updateWallForNodes(o.from,o.to);break;case"from":s=this.data._createNode({x:o.from.x,z:o.from.z},o.floorIndex,o.from.id),this.data._createWall(s,o.to,o.width,o.openings,o.bias),this.data._updateWallForNodes(o.to);break;case"to":n=this.data._createNode({x:o.to.x,z:o.to.z},o.floorIndex,o.to.id),this.data._createWall(o.from,n,o.width,o.openings,o.bias),this.data._updateWallForNodes(o.from);break;default:throw new Error(`${e.deletedNodes} is an invalid value`)}}}class $ extends F{onRun(e){const t=this.data.getWall(e.fromWallId).clone(),o=t.getDirection().normalize().multiplyScalar(e.along),s=t.from.getVec3().add(o);this.data._deleteWall(e.fromWallId);const n=this.data._createNode({x:s.x,z:s.z},t.floorIndex),a=this.data._createNode(e.to,t.floorIndex),i=this.data._createWall(n,a,e.width,[],.5),r=this.data._createWall(t.from,n,t.width,[],t.bias),d=this.data._createWall(n,t.to,t.width,[],t.bias);return D(t,[r,d],this.data),{deletedWall:t,newTrailingWall:i,newLeftWall:r,newRightWall:d,newNodeToId:a.id}}onInvert(e,t){const{deletedWall:o,newTrailingWall:s,newLeftWall:n,newRightWall:a}=e;this.data._deleteWall(s.id),this.data._deleteWall(n.id),this.data._deleteWall(a.id),this.data._deleteNode(s.from.id),this.data._deleteNode(s.to.id),this.data._createWall(o.from,o.to,o.width,o.openings,o.bias)}merge(e){return!!(e instanceof M&&this._outputCache&&e.inputs.nodeId===this._outputCache.newTrailingWall.to.id)&&(this.inputs.to=e.inputs.newPos,!0)}}class K extends F{onRun(e){const t=this.data.getWall(e.wallId),o=this.data.getNode(e.nodeId),s={x:o.x,z:o.z},n=t.getDirection().normalize().multiplyScalar(e.along),a=t.from.getVec3().add(n);this.data._deleteWall(t.id),this.data._updateNode(e.nodeId,{x:a.x,z:a.z}),this.data._updateWallForNodes(o);const i=this.data.hasWallBetween(t.from,o)?null:this.data._createWall(t.from,o,t.width,[],t.bias),r=this.data.hasWallBetween(o,t.to)?null:this.data._createWall(o,t.to,t.width,[],t.bias);return D(t,[i,r].filter((e=>!!e)),this.data),{deletedWall:t,newLeftWall:i,newRightWall:r,prevNodePos:s}}onInvert(e,t){const{newLeftWall:o,newRightWall:s,deletedWall:n,prevNodePos:a}=e;o&&this.data._deleteWall(o.id),s&&this.data._deleteWall(s.id),this.data._updateNode(t.nodeId,a),this.data._updateWallForNodes(this.data.getNode(t.nodeId)),this.data._createWall(n.from,n.to,n.width,n.openings,n.bias)}}class U extends F{onRun({wallId:e,props:t}){const o=this.data.getWall(e),s=o.width,n=o.bias;return this.data._setEdgeProps(e,t),{wallId:e,props:{width:s,bias:n}}}onInvert({wallId:e,props:t},o){this.data._setEdgeProps(e,t)}merge(e){return e instanceof U&&e.inputs.wallId===this.inputs.wallId&&(this.inputs.props.width=e.inputs.props.width,this.inputs.props.bias=e.inputs.props.bias,!0)}}class G extends F{onRun(e){const t=this.data.getWall(e.wallId),o=[],s=[],n=[],a={originalFromPos:t.from.getPoint(),originalToPos:t.to.getPoint(),deletedWalls:s,createdWalls:o,originalWallId:e.wallId,createdNodes:n};return e.fromNode&&this.createJoint(t.from,t,s,o,n),e.toNode&&this.createJoint(t.to,t,s,o,n),a}onInvert(e,t){for(const t of e.createdWalls)this.data._deleteWall(t.id);for(const t of e.deletedWalls)this.data._createWall(t.from,t.to,t.width,t.openings,t.bias);for(const t of e.createdNodes)this.data._deleteNode(t.id);const o=this.data.getWall(this.inputs.wallId);this.data._updateNode(o.from.id,e.originalFromPos),this.data._updateNode(o.to.id,e.originalToPos),this.data._updateWallForNodes(o.from,o.to)}merge(e){return e instanceof V&&e.inputs.wallId===this.inputs.wallId&&(this.inputs.fromPos=e.inputs.newFromPos,this.inputs.toPos=e.inputs.newToPos,!0)}createJoint(e,t,o,s,n){const a=this.data._createNode({x:e.x,z:e.z},e.floorIndex),i=this.data.getWallsForNode(e);for(const n of i){const i=n.clone();if(i.id!==t.id){const t=i.getOtherNode(e);o.push(i),this.data._deleteWall(i.id);const n=i.from===t?this.data._createWall(t,a,i.width,[],i.bias):this.data._createWall(a,t,i.width,[],i.bias);D(i,[n],this.data),s.push(n)}}n.push(a);const r=t.from===e?this.data._createWall(a,t.from,t.width,[],t.bias):this.data._createWall(t.to,a,t.width,[],t.bias);s.push(r)}}class H extends F{onRun(e){const t=this.data.getNode(e.nodeId),o=Array.from(this.data.getWallsForNode(t).values());if(2!==o.length)throw new Error("Can only delete nodes with two edges on it");const s=o[0].clone(),n=s.getOtherNode(t),a=o[1].clone(),i=a.getOtherNode(t);this.data._deleteNode(t.id),this.data._deleteWall(s.id),this.data._deleteWall(a.id);const r=this.data.hasWallBetween(n,i)?null:this.data._createWall(n,i,(s.width+a.width)/2,[],(s.bias+a.bias)/2);return r&&(D(s,[r],this.data),D(a,[r],this.data)),{deletedNode:t,deletedWall1:s,deletedWall2:a,createdWall:r}}onInvert(e,t){const{createdWall:o,deletedNode:s,deletedWall1:n,deletedWall2:a}=e;o&&this.data._deleteWall(o.id),this.data._createNode(s.getPoint(),s.floorIndex,s.id),this.data._createWall(n.from,n.to,n.width,n.openings,n.bias),this.data._createWall(a.from,a.to,a.width,a.openings,a.bias)}}class Q extends F{onRun(e){return this.data._recomputeRooms()}onInvert(e,t){if(e.createdRooms)for(const t of e.createdRooms)this.data._deleteRoom(t.id);if(e.deletedRooms)for(const t of e.deletedRooms)this.data._createRoom(t.id,t.points,t.walls)}}class q extends F{onRun(e){const t=this.data.getNode(e.fromId),o=this.data.getNode(e.toId);return{wall:this.data._createWall(t,o,e.width,[],.5).id}}onInvert(e,t){this.data._deleteWall(e.wall)}}class j extends F{onRun(e){const{id:t}=e,o=this.data.getOpening(t),{type:s,relativePos:n,width:a}=o;return this.data._setOpeningDetails(t,e),{id:t,type:s,relativePos:n,width:a}}onInvert(e,t){const{id:o}=e;this.data._setOpeningDetails(o,e)}}class J extends F{onRun(e){const{openingId:t}=e,o=this.data.getOpening(t);return this.data._deleteWallOpening(t),{deletedOpening:o}}onInvert(e,t){const{id:o,wallId:s,type:n,relativePos:a,width:i}=e.deletedOpening,r=this.data.getWall(s);this.data._createWallOpening(r,n,a,i,o)}}class Y extends F{onRun(e){const{wallId:t,type:o,relativePos:s,width:n}=e,a=this.data.getWall(t);return{openingId:this.data._createWallOpening(a,o,s,n).id}}onInvert(e,t){const{openingId:o}=e;this.data._deleteWallOpening(o)}}class Z{constructor(e){this.name="wall-graph",this.version=0,this._nodes=new A,this._walls=new A,this._rooms=new A,this._wallOpenings=new A,this.undoBuffer=new O(this.commit.bind(this)),this._nodeToWallMap=new Map,this._wallToRoomMap=new Map,this._wallsByFloor=new Map,this._observerQueue=[],this._anythingChangeObservers=new Set,this.logger=new C.Z("wall-graph"),this.wallsChanged=!1,this._updateWallForNodes=(()=>{const e=new Set,t=new Set;return(...o)=>{e.clear(),t.clear();const s=o=>{if(!e.has(o)){this._scheduleObserver({observers:this._walls.updatedObservers,param:o});const s=this._wallToRoomMap.get(o);if(s)for(const e of s.values())t.has(e)||(this._scheduleObserver({observers:this._rooms.updatedObservers,param:e}),t.add(e));for(const e of o.openings)this._scheduleObserver({observers:this._wallOpenings.updatedObservers,param:e});e.add(o)}};for(const e of o){const t=this._nodeToWallMap.get(e);if(null!=t)for(const o of t){s(o);const t=o.getOtherNode(e),n=this._nodeToWallMap.get(t);if(null!=n)for(const e of n)s(e)}}}})(),this.getRelativeAngle=(()=>{const e=new p.Vector2,t=new p.Vector2,o=new p.Vector2,s=(t,o)=>{if(0===t.lengthSq()){const s=this.getNodeNeighbors(o);if(0===s.size)return;const n=Array.from(s.values())[0];t.set(n.x,n.z).sub(e)}};return(n,a,i)=>{if(a===i)return 2*Math.PI;e.set(n.x,n.z),t.set(a.x,a.z).sub(e),s(t,a),o.set(i.x,i.z).sub(e),s(o,i);const r=Math.atan2(t.y,t.x);let d=-(Math.atan2(o.y,o.x)-r);return d<0&&(d+=2*Math.PI),d}})(),e&&(this.version=e.version,this.load(e))}load(e){var t;let o=!1;for(const s in e.floors){const n=e.floors[s],a=n.vertices;for(const e in a){const t=a[e];this._createNode({x:t.x,z:-t.y},parseInt(s,10),e)}for(const e in n.edges){const[o,s]=e.split(":"),a=n.edges[e],i=a.thickness,r=this.getNode(o),d=this.getNode(s),l=this._createWall(r,d,i,[],null!==(t=a.bias)&&void 0!==t?t:.5);for(const e in a.openings){const{relativePos:t,type:o,width:s}=a.openings[e];this._createWallOpening(l,o,t,s,e)}}if(n.rooms)for(const e in n.rooms){o=!0;const t=n.rooms[e],s=t.vertices.map((e=>this.getNode(e))),a=new Set;for(let e=0;e<t.vertices.length;e++){const o=t.vertices[e],s=t.vertices[(e+1)%t.vertices.length],n=W.getCompositeKey(o,s);a.add(this.getWall(n))}this._createRoom(e,s,a)}}o||this._recomputeRooms()}get walls(){return this._walls.data}get nodes(){return this._nodes.data}get rooms(){return this._rooms.data}get wallOpenings(){return this._wallOpenings.data}getNode(e){const t=this._nodes.get(e);if(t)return t;throw new Error("WallNode does not exist in WallGraphData")}getWall(e){const t=this._walls.get(e);if(t)return t;throw new Error("Wall does not exist in WallGraphData")}getRoom(e){const t=this._rooms.get(e);if(!t)throw new Error("Room id is invalid!");return t}getOpening(e){const t=this._wallOpenings.get(e);if(!t)throw new Error("Opening id is invalid");return t}getEntity(e){const t=this._walls.get(e)||this._nodes.get(e)||this._rooms.get(e)||this._wallOpenings.get(e);if(!t)throw new Error("No entity for id.");return t}getEdgeCountForNode(e){var t;return(null===(t=this._nodeToWallMap.get(e))||void 0===t?void 0:t.size)||0}getWallsForNode(e){const t=this._nodeToWallMap.get(e);if(t&&t.size>0)return t;throw new Error("WallNode has no associate walls, this should not happen unless inside an action")}getWallsForFloor(e){const t=this._wallsByFloor.get(e);return t&&t.size>0?t:null}getRoomClassifications(){return["Basement","Bathroom","Bedroom","Closet","Corridor","Dining","Driveway","Facade","Garage","Garden","Yard","Kitchen","Laundry","Living","Lobby","Office","Patio","Pool","Staircase","Unfurnished","Other","Mixed","Unknown"]}hasWallBetween(e,t){const o=W.getCompositeKey(e.id,t.id);return this._walls.has(o)}canDeleteEntity(e){if(null!=e){const t=this.getEntity(e);return t instanceof N?2===this.getEdgeCountForNode(t):t instanceof W||t instanceof z}return!1}undo(){const e=this.undoBuffer.pop();e&&(this.wallsChanged=!1,e.invert(),this.wallsChanged&&this._recomputeRooms(),this.commit())}availableUndos(){return this.undoBuffer.availableUndos()}finalizeHistory(){this.undoBuffer.finalize()}triggerAction(e){try{this.wallsChanged=!1,e.run()}catch(e){return this.logger.error(e),void(this._observerQueue.length=0)}this.undoBuffer.push(e),this.wallsChanged&&this.triggerAction(new Q(this,{})),this.commit()}onNodesChanged(e){return this._nodes.onChanged(e)}onWallsChanged(e){return this._walls.onChanged(e)}onRoomsChanged(e){return this._rooms.onChanged(e)}onOpeningsChanged(e){return this._wallOpenings.onChanged(e)}commit(){const e=this._observerQueue.length;if(this._flushObserverQueue(),e>0)for(const e of this._anythingChangeObservers)e(void 0)}onPropertyChanged(e,t){const o=this["_"+e];if(o instanceof A){const s=o,n=()=>{s.addedObservers.add(t),s.updatedObservers.add(t),s.deletedObservers.add(t)},a=()=>this.removeOnPropertyChanged(e,t);return(0,P.k1)(n,a,!0,e)}throw new Error(`Property: ${e} does not exist on wall-data`)}removeOnPropertyChanged(e,t){const o=this["_"+e];if(!(o instanceof A))throw new Error(`Property: ${e} does not exist on wall-data`);{const e=o;e.addedObservers.delete(t),e.updatedObservers.delete(t),e.deletedObservers.delete(t)}}onChanged(e){if(this._anythingChangeObservers.has(e))throw new Error("This observer function is already observing this Observable, and double subscriptions are not supported.");return(0,P.k1)((()=>this._anythingChangeObservers.add(e)),(()=>this.removeOnChanged(e)),!0)}removeOnChanged(e){this._anythingChangeObservers.delete(e)}addFloatingEdge(e,t,o,s){const n=new S(this,{from:e,to:t,width:o,floorIndex:s});return this.triggerAction(n),n.output}addBridgingEdge(e,t,o){const s=new q(this,{fromId:e,toId:t,width:o});return this.triggerAction(s),s.output}addTrailingEdgeToNode(e,t,o){const s=new B(this,{fromId:e,to:t,width:o});return this.triggerAction(s),s.output}addTrailingEdgeToEdge(e,t,o,s){const n=new $(this,{fromWallId:e,along:t,to:o,width:s});return this.triggerAction(n),n.output}splitEdgeWithNode(e,t,o){const s=new K(this,{wallId:e,nodeId:t,along:o});return this.triggerAction(s),s.output}moveNode(e,t){const o={nodeId:e,newPos:t};this.triggerAction(new M(this,o))}moveWall(e,t,o){const s={wallId:e,newFromPos:t,newToPos:o};this.triggerAction(new V(this,s))}mergeNodes(e,t){const o=new k(this,{keepId:e,mergeId:t});return this.triggerAction(o),o.output}deleteEntity(e){if(this.canDeleteEntity(e)){const t=this.getEntity(e);if(t instanceof N){const t={nodeId:e};this.triggerAction(new H(this,t))}else if(t instanceof W){const t={wallId:e};this.triggerAction(new L(this,t))}else if(t instanceof z){const t={openingId:e};this.triggerAction(new J(this,t))}}}setEdgeProperties(e,t){const o={wallId:e,props:t};this.triggerAction(new U(this,o))}addWallOpening(e){const t=new Y(this,e);return this.triggerAction(t),t.output.openingId}editWallOpeningDetails(e,t){this.triggerAction(new j(this,Object.assign(Object.assign({},t),{id:e})))}addWallJoint(e,t,o){const s={wallId:e,fromNode:t,toNode:o};this.triggerAction(new G(this,s))}setRoomDetails(e,t){var o,s,n;const a=this.getRoom(e);a.name=null!==(o=t.name)&&void 0!==o?o:a.name,a.roomType=null!==(s=t.roomType)&&void 0!==s?s:a.roomType,a.useRoomTypeAsName=null!==(n=t.useRoomTypeAsName)&&void 0!==n?n:a.useRoomTypeAsName,this._scheduleObserver({observers:this._rooms.updatedObservers,param:a})}_createNode(e,t,o){const s=new N(o||(0,I.fV)(),t,e.x,e.z);return this._nodes.set(s.id,s),this._scheduleObserver({observers:this._nodes.addedObservers,param:s}),s}_updateNode(e,t){const o=this._nodes.get(e);if(!o)throw new Error("Attempted to update WallNode that does not exist");o.x=t.x,o.z=t.z,this._scheduleObserver({observers:this._nodes.updatedObservers,param:o})}_deleteNode(e){const t=this._nodes.get(e);if(!t)throw new Error("Attempted to delete WallNode that does not exist");this._nodes.delete(e),this._scheduleObserver({observers:this._nodes.deletedObservers,param:t})}_createRoom(e,t,o){const s=new b(e,"",t,o);this.rooms.set(e,s);for(const e of o.values()){const t=this._wallToRoomMap.get(e)||new Set;t.add(s),this._wallToRoomMap.set(e,t)}this._scheduleObserver({observers:this._rooms.addedObservers,param:s})}_updateRoom(e,t){const o=this._rooms.get(e);if(!o)throw new Error("Attempted to update Room that does not exist");for(const e of o.walls.values()){const t=this._wallToRoomMap.get(e);t&&t.delete(o)}t.name=o.name,t.useRoomTypeAsName=o.useRoomTypeAsName,t.roomType=o.roomType,this.rooms.set(e,t);for(const e of t.walls.values()){const o=this._wallToRoomMap.get(e)||new Set;o.add(t),this._wallToRoomMap.set(e,o)}this._scheduleObserver({observers:this._rooms.updatedObservers,param:t})}_deleteRoom(e){const t=this._rooms.get(e);if(!t)throw new Error("Attempted to delete Room that does not exist");this._rooms.delete(t.id);for(const e of t.walls.values()){const o=this._wallToRoomMap.get(e);null==o||o.delete(t)}this._scheduleObserver({observers:this._rooms.deletedObservers,param:t})}_createWall(e,t,o,s,n){if(e.id===t.id)throw new Error("Cannot create wall where the from node is the same as the to node.");if(e.floorIndex!==t.floorIndex)throw new Error("Cannot create a wall between nodes on different floors.");const a=W.getCompositeKey(e.id,t.id);if(this._walls.has(a))throw new Error(`Wall already exists between ${e.id}:${t.id}`);const i=this.getNode(e.id),r=this.getNode(t.id),d=new W(a,i,r,o,n);this._walls.set(d.id,d),this._addToWallDicts(d),this._scheduleObserver({observers:this._walls.addedObservers,param:d});for(const e of s){const{type:t,relativePos:o,width:s,id:n}=e;this._createWallOpening(d,t,o,s,n)}return this.wallsChanged=!0,d}_deleteWall(e){const t=this.getWall(e);for(const e of t.openings.slice())this._deleteWallOpening(e.id);this._walls.delete(e),this._removeFromWallDicts(t),this._scheduleObserver({observers:this._walls.deletedObservers,param:t}),this.wallsChanged=!0}_setEdgeProps(e,t){const{width:o,bias:s}=t,n=this.getWall(e);void 0!==o&&(n.width=o),void 0!==s&&(n.bias=s),this._updateWallForNodes(n.from,n.to)}_createWallOpening(e,t,o,s,n){const a=new z(n||(0,I.fV)(),e.id,t,o,s);return this._wallOpenings.set(a.id,a),e.openings.push(a),this._scheduleObserver({observers:this._wallOpenings.addedObservers,param:a}),a}_setOpeningDetails(e,t){var o,s,n;const a=this.getOpening(e);a.type=null!==(o=t.type)&&void 0!==o?o:a.type,a.relativePos=null!==(s=t.relativePos)&&void 0!==s?s:a.relativePos,a.width=null!==(n=t.width)&&void 0!==n?n:a.width,this._scheduleObserver({observers:this._wallOpenings.updatedObservers,param:a})}_deleteWallOpening(e){const t=this.getOpening(e),o=this.getWall(t.wallId),s=o.openings.findIndex((t=>t.id===e));if(-1===s)throw new Error("Expected opening to exist in wall array!");o.openings.splice(s,1),this._wallOpenings.delete(e),this._scheduleObserver({observers:this._wallOpenings.deletedObservers,param:t})}_setRoomDetails(e,t){const o=this.getRoom(e);o.name=t,this._scheduleObserver({observers:this._rooms.updatedObservers,param:o})}_addToWallDicts(e){const t=(t,o)=>{let s=o.get(t);null!=s?s.add(e):(s=new Set,s.add(e),o.set(t,s))};t(e.from,this._nodeToWallMap),t(e.to,this._nodeToWallMap),t(e.floorIndex,this._wallsByFloor)}_removeFromWallDicts(e){const t=(t,o)=>{const s=o.get(t);null!=s&&(s.delete(e),0===s.size&&o.delete(t))};t(e.from,this._nodeToWallMap),t(e.to,this._nodeToWallMap),t(e.floorIndex,this._wallsByFloor),this._wallToRoomMap.delete(e)}_scheduleObserver(e){this._observerQueue.push(e)}_flushObserverQueue(){for(const e of this._observerQueue)for(const t of e.observers){const o=e.param;t(o,o.id)}this._observerQueue.length=0}getSnapshot(){const e={version:this.version,floors:{}},t=t=>{e.floors[`${t}`]||(e.floors[`${t}`]={edges:{},vertices:{},rooms:{}})};for(const[o,s]of this._nodes.data){t(s.floorIndex);e.floors[`${s.floorIndex}`].vertices[s.id]=s.getSnapshot()}for(const[o,s]of this._walls.data){t(s.floorIndex);e.floors[`${s.floorIndex}`].edges[s.id]=s.getSnapshot()}for(const[o,s]of this._rooms.data){t(s.floorIndex);e.floors[`${s.floorIndex}`].rooms[s.id]=s.getSnapshot()}return e}_recomputeRooms(){const e={createdRooms:[],deletedRooms:[]},t=this.findEnclosedRegions(),o=t.map((e=>new Set(e))),s=new Array;for(const e of this._rooms.data.values())for(let t=0;t<o.length;t++){const n=o[t],a=e.points.reduce(((e,t)=>n.has(t)?e+1:e),0);a>0&&s.push({score:a/e.points.length,oldRoomId:e.id,newRoomIndex:t})}const n=new Set,a=new Array(t.length);s.sort(((e,t)=>{var o,s;return t.score-e.score||((null===(o=this._rooms.get(t.oldRoomId))||void 0===o?void 0:o.getArea())||0)-((null===(s=this._rooms.get(e.oldRoomId))||void 0===s?void 0:s.getArea())||0)}));for(const{oldRoomId:e,newRoomIndex:t}of s)n.has(e)||a[t]||(a[t]=e,n.add(e));for(let e=0;e<t.length;e++)a[e]||(a[e]=(0,I.fV)());for(let o=0;o<t.length;o++){const s=a[o],n=t[o],i=new Set;for(let e=0;e<n.length;e++){const t=n[e],o=n[(e+1)%n.length];this.getWallsForNodes(i,t,o)}const r=new b(s,"",t[o],i),d=this._rooms.get(s);d?T(d.walls,r.walls)||this._updateRoom(s,r):(this._createRoom(s,t[o],i),e.createdRooms.push(r))}const i=new Set(a);for(const t of this._rooms.data.values())i.has(t.id)||(this._deleteRoom(t.id),e.deletedRooms.push(t));return this.wallsChanged=!1,e}findEnclosedRegions(){const e=new Array,t=new Set,o=(o,s)=>{const n=`${o.id}/${s.id}`;if(t.has(n))return;const a=[o,s];for(;;){const e=a[a.length-1],t=a[a.length-2],o=this.getNodeNeighbors(e);let s,n=4*Math.PI;for(const a of o){const o=this.getRelativeAngle(e,t,a);o<n&&(n=o,s=a)}if(!s)throw new Error("Expected a neighbor");if(e===a[0]&&s===a[1]){a.pop();break}a.push(s)}v(a)>.4&&e.push(a);for(let e=0;e<a.length;e++){const o=a[e],s=a[(e+1)%a.length],n=`${o.id}/${s.id}`;t.add(n)}};for(const e of this.walls.values())o(e.from,e.to),o(e.to,e.from);const s=new Map;for(const t of e)s.set(t,v(t));e.sort(((e,t)=>{const o=e[0].floorIndex-t[0].floorIndex;return 0!==o?o:s.get(e)-s.get(t)}));const n=e.map((e=>e.map((e=>new p.Vector2(e.x,e.z))))),a=new p.Vector2,i=new p.Vector2;for(let t=n.length-1;t>=0;t--){const o=n[t],s=e[t][0].floorIndex;let r=!1;for(let d=0;d<t&&!r;d++){const l=n[d];if(l.length<3||e[d][0].floorIndex!==s)continue;let h=!0;for(let e=0;e<l.length&&h;e++){const t=(e+1)%l.length,o=e,s=(e+2)%l.length;a.copy(l[t]),i.addVectors(l[t],l[o]).add(l[s]).multiplyScalar(1/3),i.sub(a),i.normalize().multiplyScalar(.01),a.add(i),h=!E(a,l)}h||E(a,o)&&(e.splice(t,1),r=!0)}}return e}getNodeNeighbors(e){const t=new Set,o=this._nodeToWallMap.get(e);if(!o)throw new Error("Expecting node to wall map to be valid");for(const s of o.values())t.add(s.getOtherNode(e));return t}getWallsForNodes(e,t,o){const s=W.getCompositeKey(t.id,o.id);e.add(this.getWall(s))}}class X extends s.Y{constructor(){super(...arguments),this.name="roombounds"}async init(e,t){this.data=new Z,t.market.register(this,Z,this.data),async function(e,t){const[o,s]=await Promise.all([e.market.waitForData(r.R),e.market.waitForData(u.i)]),a=(n,a,i,r=[])=>{const d=[];for(const a of t.rooms.values())if(n(a.name)||n(a.roomType)){const t=s.getFloorAtIndex(a.floorIndex);if(!t)throw new Error("Unable to find floor for room while generating search results.");d.push(new g(e.commandBinder,o,a,t.id))}return d.sort(((e,t)=>e.title.localeCompare(t.title)))},d=e=>{},c=e=>new n.V(t.onChanged(e)),p={renew:()=>{e.commandBinder.issueCommandWhenBound(new h.c6({id:i.SF.MODELROOM,groupPhraseKey:l.Z.TOOLS.ROOMPLAN,getSimpleMatches:a,registerChangeObserver:c,onSearchActivatedChanged:d,groupOrder:40,groupIcon:"icon-edit-floorplan"}))},cancel:()=>{e.commandBinder.issueCommandWhenBound(new h.Pe(i.SF.MODELROOM))}};return p.renew(),p}(t,this.data).then((e=>this.bindings.push(e)))}dispose(e){super.dispose(e)}}const ee=X},56163:(e,t,o)=>{o.d(t,{K:()=>r});var s=o(52528),n=o(71166),a=o(63319);const i=new s.v({});class r{constructor(e,t,o){this.commandBinder=e,this.layersData=t,this.dataTypeGroup=o,this.textParser=i,this.enabled=!0,this.bindings=[]}getGroupingId(e){switch(e){case a.HH.TYPE:return this.getTypeId();case a.HH.FLOOR:return this.getFloorId();case a.HH.LAYER:return this.getLayerGroupId();case a.HH.DATE:return this.dateBucket}}getFloorId(){return this.floorId}getDateBucket(){return this.dateBucket}getTypeId(){return this.typeId}supportsBatchDelete(){return!1}supportsLayeredCopyMove(){return!1}getLayerGroupId(){var e,t;const o=null===(e=this.layersData)||void 0===e?void 0:e.getBaseLayerId(),s=null===(t=this.layersData)||void 0===t?void 0:t.getViewLayerId();return this.layerId&&s&&this.layerId===o?s:this.layerId}isLayerVisible(){return!this.layersData||!this.layerId||this.layersData.layerVisible(this.layerId)}onSelect(e,t,o){this.commandBinder.issueCommand(new n.IL(this.id,this.typeId))}registerBindings(){}cancelBindings(){this.bindings.forEach((e=>e.cancel()))}}}}]);