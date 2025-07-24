import axios from "./config";

export const getRepo = async(owner,repo)=>
    await axios.get(`/${owner}/${repo}`)

export const getRepoList = async (owner)=>
    await axios.get(`/${owner}/repos`)