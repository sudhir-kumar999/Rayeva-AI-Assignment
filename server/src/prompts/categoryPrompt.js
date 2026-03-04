export const categoryPrompt = (productName, description) => {

return `
You are an AI product catalog assistant.

Product Name: ${productName}
Description: ${description}

Tasks:

1 Detect primary category
2 Suggest sub category
3 Generate 5-10 SEO tags
4 Suggest sustainability filters

Return ONLY JSON format like:

{
"primary_category":"",
"sub_category":"",
"tags":[],
"sustainability_filters":[]
}
`;

};