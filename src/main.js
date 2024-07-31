import {
bootstrapCameraKit,
createMediaStreamSource,
Transform2D,
} from '@snap/camera-kit';

// (async function(){
//     const cameraKit = await bootstrapCameraKit({apiToken:'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzIyMjc2ODI5LCJzdWIiOiI0NWQ3YWZhYS0xNThkLTQ1NjUtOTA0MC02MGQwNGFiODI1NWF-U1RBR0lOR34xNzMyNmJkNi0yNzhiLTQ5NTctOTkzNy1iYzQ1MDVhYjU2NzcifQ.Z0hMJYbMGqltGUODCcJUCzdzL7egF9Jferfx1Zz_kqI'});
//     const session = await cameraKit.createSession();
//     document.getElementById('canvas').replaceWith(session.output.live);

//     const {lenses} = await cameraKit.lensRepository.loadLens('5055350f-afb9-4e6f-8744-b823cc7169db');
//     session.applyLens(lenses[0]);
//     let mediaStream = await navigator.mediaDevices.getUserMedia({video:{
//         facingMode: 'environment'
//     }});
//     const source = createMediaStreamSource(mediaStream,{
//         cameraType:'back'
//     });
//     await session.setSource(source)
//     session.source.setRenderSize(window.innerWidth, window.innerHeight);
//     session.play();

// })();

(async function(){
    const cameraKit = await bootstrapCameraKit({
        apiToken:'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzIyNDQ3NjYzLCJzdWIiOiJlZTJhY2RmZC1kMzlmLTQ0NjgtYTMyNi05NWZkNjEyODBiODl-U1RBR0lOR344OWMzMjQwZS0yYTcwLTRhNWEtOGIzNi0zMzA5ZDIzMjEzNTUifQ.oUzMCXFZ7hvVmdthCPCDcilzmxl9A2r0dH-Q--h0Jzs'
    });
    const session = await cameraKit.createSession();
    document.getElementById('canvas').replaceWith(session.output.live);
    let mediaStream = await navigator.mediaDevices.getUserMedia({
        video:{
        facingMode: 'environment'
    }});
    const source = createMediaStreamSource(mediaStream,{
        cameraType:'back'
    });
    await session.setSource(source)
    session.source.setRenderSize(window.innerWidth, window.innerHeight);
    await session.play();
    // const lens = await cameraKit.lensRepository.loadLens('40369030925','5055350f-afb9-4e6f-8744-b823cc7169db');
    const { lenses } = await cameraKit.lensRepository.loadLensGroups([
        '86b46bbb-160f-4bb8-8f55-2cc3a05c84c2'
      ]);
      await session.applyLens(lenses[0]);
    // await session.applyLens(lens);
    

})();

