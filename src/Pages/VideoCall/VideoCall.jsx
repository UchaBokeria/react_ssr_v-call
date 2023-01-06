import React from 'react'
import { io } from 'socket.io-client'
import "./style.css"
import { v4 as uuidv4 } from 'uuid';

// 1. Setup media sources and access
navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(localStream => {

  // HTML elements
  const root = document.querySelector("#root");

  const connectButton = document.createElement("button");
  connectButton.id = "connectButton";
  connectButton.innerHTML = "Connect";

  const answerButton = document.createElement("button");
  answerButton.id = "answerButton";
  answerButton.disabled = true;
  answerButton.innerHTML = "Answer";

  const hangupButton = document.createElement("button");
  hangupButton.id = "hangupButton";
  hangupButton.disabled = true;
  hangupButton.innerHTML = "Hang Up";

  const center = document.createElement("div");
  center.classList.add("center");

  const remoteVideo = document.createElement("video");
  remoteVideo.id = "remoteVideo";
  remoteVideo.disabled = true;
  remoteVideo.setAttribute("autoPlay", "");
  remoteVideo.setAttribute("playsInline", "");
  remoteVideo.classList.add("videoyou");


  const webcamVideo = document.createElement("video");
  webcamVideo.id = "webcamVideo";
  webcamVideo.muted = true;
  webcamVideo.setAttribute("autoPlay", "");
  webcamVideo.setAttribute("playsInline", "");
  webcamVideo.classList.add("videome");

  root.appendChild(webcamVideo);
  root.appendChild(remoteVideo);
  center.appendChild(connectButton);
  center.appendChild(answerButton);
  center.appendChild(hangupButton);
  root.appendChild(center);

  const socket = io();
  window.onclose = () => { return 'Please Confirm' };

  // Global State
  const StunServers = ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'];
  const pc = new RTCPeerConnection({ iceCandidatePoolSize: 10, iceServers: [{ urls: StunServers }] });

  connectButton.onclick = () => alert("You can connect after user will join");

  // Empty remote stream
  let remoteStream = new MediaStream();
  // Push tracks from local stream to peer connection
  localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

  // Pull tracks from remote stream, add to video stream
  pc.ontrack = (event) => event.streams[0].getTracks().forEach((track) => remoteStream.addTrack(track));

  webcamVideo.srcObject = localStream;
  remoteVideo.srcObject = remoteStream;

  var param = new URLSearchParams(window.location.search);
  // !param.has('ref') && console.error("ROOM REF IS EMPTY");

  const ROOM = 1;
  // const ROOM = uuidv4();
  console.log('ref',ROOM);
  socket.emit("join-room", ROOM, param.get('i'));

  socket.on("Whoami", (isPair) => {
    if (isPair) answerButton.style.display = 'block';
    else connectButton.style.display = 'block';
  })

  // 2. Create an offer
  socket.on("Other-join", () => {
    connectButton.classList.add('actived');
    connectButton.disabled = !param.has('ref');

    connectButton.onclick = async () => {
      /* @ Offering Part: Call initiator creates an offer and the candidates for this offer */

      // callback to save candidates in db after setLocalDescription()
      pc.onicecandidate = (event) => event.candidate && socket.emit("Set-offer-candidates", ROOM, event.candidate);

      // Create offer
      const offerDescription = await pc.createOffer();
      await pc.setLocalDescription(offerDescription);

      // save offer in db
      socket.emit("Set-offer", ROOM, { sdp: offerDescription.sdp, type: offerDescription.type });

      /* @ Listening for answer Part: Pair returns the answer with the candidates for this answer */

      // Listen for remote answer to set session
      socket.on("Get-answer", answer =>
        !pc.currentRemoteDescription && pc.setRemoteDescription(new RTCSessionDescription(answer)));

      // When answered, add candidate to peer connection
      socket.on("Get-answer-candidates", each => pc.addIceCandidate(new RTCIceCandidate(each)));

      connectButton.disabled = true;
      hangupButton.disabled = false;
    };
  })

  // 3. Answer the call with the unique ID
  socket.on("Get-offer", offer => {
    answerButton.disabled = false;

    answerButton.onclick = async () => {
      /* @ Offering Part: Call initiator creates an offer and the candidates for this offer */

      // callback to save candidates in db after setLocalDescription()
      pc.onicecandidate = (event) => event.candidate &&
        socket.emit("Set-answer-candidates", ROOM, event.candidate);

      // Set offer initiator to answer
      await pc.setRemoteDescription(new RTCSessionDescription(offer));

      // Create answer
      const answerDescription = await pc.createAnswer();
      await pc.setLocalDescription(answerDescription);

      /* @ Listening for answer Part: Pair returns the answer with the candidates for this answer */
      // save answer in db
      socket.emit("Set-answer", ROOM, { type: answerDescription.type, sdp: answerDescription.sdp });

      socket.on("Get-offer-candidates", each => pc.addIceCandidate(new RTCIceCandidate(each)));

      answerButton.disabled = true;
      hangupButton.disabled = false;
    };
  })

  hangupButton.onclick = async () => {
    if (window.confirm("Close the call?")) {
      socket.emit("Disconnect", ROOM)
      window.location.reload()
    }
  }

  socket.on("Disconnect", () => remoteVideo.srcObject = null)

})

const VideoCall = () => {
  return (
    <div>VideoCall</div>
  )
}

export default VideoCall