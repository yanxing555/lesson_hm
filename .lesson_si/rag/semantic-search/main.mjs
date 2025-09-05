import {
    client,
    cosineSimilarity
} from './llm.mjs';
import fs from 'fs/promises';

const inputFilePath = './data/posts_with_embedding.json';
const data = await fs.readFile(inputFilePath, "utf-8");
const posts = JSON.parse(data);


// 向量 cos函数 文本语义检索
// LIKE 文本的检索 
// 比如 你好 hello  这个在向量中就是相似度很高的，但是LIKE 检索不到

const response = await client.embeddings.create({
    model: 'text-embedding-ada-002',
    input: `react,tailwindcss`
})
// console.log(response.data[0].embedding);

const {
    embedding
} = response.data[0];

const results = posts.map(item => ({
    ...item,
    similarity: cosineSimilarity(embedding, item.embeddings)
})).sort((a, b) => a.similarity - b.similarity)
    .reverse()
    .slice(0, 3)
    .map((item, index) => `${index + 1}.${item.title},${item.category}`)
    .join('\n');
console.log(results);
