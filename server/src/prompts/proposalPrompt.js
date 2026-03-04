export const proposalPrompt = (budget, employees, goal) => {

return `
You are an AI sustainability consultant.

Client goal: ${goal}
Budget: ${budget}
Employees: ${employees}

Generate:

1 Product mix
2 Budget allocation
3 Estimated sustainability impact
4 Short impact summary

Return JSON format:

{
"product_mix":[],
"budget_allocation":{},
"impact_summary":""
}
`;

};