import { createPreprClient } from "@preprio/nodejs-sdk";

const prepr = createPreprClient({
  token: process.env.PREPR_PUBLISHED_ACCESS_TOKEN,
  baseUrl: "https://graphql.prepr.io/graphql",
  userId: null,
});

export { prepr };

export async function getTeamMembersPage() {
  const data = await prepr.graphqlQuery(
    `{
	Page (id: "a854bfa4-095c-40db-be08-1ff6d7d1ad61") { 
		_id
		title
		_slug
		stack { 
			__typename
    ... on PersonCollection {
      name
      people {
        title
        full_name
        email
        bio
        profile_pic {
          url
        }
				subjective
        possessive
        objective
      }
    }
  }
		type
	}
}`
  );

  return data.data.Page;
}
