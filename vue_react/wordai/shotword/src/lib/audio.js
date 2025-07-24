export const generateAudio = async(text)=> {
    const endpoint = "/tts/api/v1/tts";
    const token = import.meta.env.VITE_AUDIO_ACCESS_TOKEN;
    const appId = import.meta.env.VITE_AUDIO_APP_ID;
    const clusterId = import.meta.env.VITE_CLUSTER_ID;
    const voicename =import.meta.env.VITE_AUDIO_VOICE_NAME
    const headers = {

        const end
        'Content-Type':'application/json',
        Authorization:`Bearer;${token}`
    }
    const payload ={
        app:{
            appid:appId,
            token,
            cluster:clusterId
        },
        user:{
            uid:'bearbobo'
        }
    }
}

export const generateAudioWithYm = ()