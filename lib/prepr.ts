import { createPreprClient } from "@preprio/nodejs-sdk";

const prepr = createPreprClient({
  token: process.env.PREPR_PUBLISHED_ACCESS_TOKEN,
  baseUrl: "https://graphql.prepr.io/graphql",
  userId: null,
});

export { prepr };

export async function getTeamMembersPage(preview: boolean) {
  const data =
    (await prepr
      .graphqlQuery(
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
      )
      .fetch()) || {};

  return data.data.Page;
}

export async function getSponsorshipsPage() {
  const data =
    (await prepr
      .graphqlQuery(
        `query{
  SponsorshipPage { 
		_id
		title
		description
		subtitle
		call_to_action
		registration
		registration_form { 
			_id
			url
			height
			width
		}
		closed_message
		naming_rights
		media_posts
		tshirt_recognition
		vendor_plot
		festival_ticket
		swag_bags
    sponsorship_badge
		prism_ticket
		logo_attribution
		festival_ticket_value
		swag_bag_value
		prism_ticket_value
		large_plot_value
		small_plot_value
	}}`
      )
      .fetch()) || {};

  return data.data.SponsorshipPage;
}

export async function getSponsorships() {
  const data =
    (await prepr
      .graphqlQuery(
        `query {
  Sponsorships(sort: price_DESC) {
    total
    items {
      _id
      level
      price
      naming_rights
      media_posts
      tshirt_recognition
      vendor_plot_size
      festival_tickets
      swag_bags
      prism_tickets
    }
  }}`
      )
      .fetch()) || {};

  return data.data.Sponsorships;
}
