// 负责 posts.json 的模块化
// 支持了fs 的promise 版本 
import fs from 'fs/promises';
// readFileSync 同步
// readFile() 异步 callback
// fs 推出了promise 版本
import { client } from './llm.mjs';

const inputFilePath = './data/posts.json';
const outputFilePath = './data/posts_with_embedding.json';

// 为什么可以直接用await 而没有用async包裹 
// 但从 ES2022 开始，JavaScript 引入了 Top-Level Await，允许你在 模块的顶层直接使用 await，而不需要包在 async 函数里。
const data = await fs.readFile(inputFilePath, "utf-8");
// console.log(data);

// 向量化
const posts = JSON.parse(data);

const postsWithEmbedding = [];

for (const { title, category } of posts) {
    // console.log(title,category,'------');
    const response = await client.embeddings.create({
        model: 'text-embedding-ada-002',
        input: `标题:${title}; 分类:${category}`
    })

    postsWithEmbedding.push({
        title,
        category,
        embeddings: response.data[0].embedding
    })
}

await fs.writeFile(outputFilePath,
    JSON.stringify(
        postsWithEmbedding,
        null,
        2
    )
)