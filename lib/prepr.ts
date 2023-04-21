import { createPreprClient } from "@preprio/nodejs-sdk";

const prepr = createPreprClient({
  token: process.env.PREPR_PUBLISHED_ACCESS_TOKEN,
  baseUrl: "https://graphql.prepr.io/graphql",
  userId: null,
});

export { prepr };

export type TeamPage = {
  title: string;
  description: string;
  executive_committee: TeamMember[];
  board_members: TeamMember[];
};

export type TeamMember = {
  title: string;
  full_name: string;
  email: string;
  bio: string;
  profile_pic: [{ url: string }];
  subjective: string;
  possessive: string;
  objective: string;
};

export async function getTeamMembersPage(preview: boolean) {
  const data =
    (await prepr
      .graphqlQuery(
        `{
	TeamPage { 
		_id
		title
		description
		executive_committee { 
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
		board_members { 
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
}`
      )
      .fetch()) || {};

  return data.data.TeamPage as TeamPage;
}

export type SponsorshipPage = {
  title: string;
  description: string;
  subtitle: string;
  call_to_action: string;
  registration: boolean;
  registration_form: {
    height: string;
    url: string;
    width: string;
  };
  closed_message: string;
  naming_rights: string;
  media_posts: string;
  tshirt_recognition: string;
  vendor_plot: string;
  festival_ticket: string;
  swag_bags: string;
  prism_ticket: string;
  logo_attribution: string;
  sponsorship_badge: string;
  festival_ticket_value: number;
  swag_bag_value: number;
  prism_ticket_value: number;
  large_plot_value: number;
  small_plot_value: number;
};

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

  return data.data.SponsorshipPage as SponsorshipPage;
}

export type Sponsorships = {
  total: number;
  items: [
    {
      _id: string;
      level: string;
      price: number;
      naming_rights: boolean;
      media_posts: boolean;
      tshirt_recognition: boolean;
      vendor_plot_size: string;
      festival_tickets: number;
      swag_bags: number;
      prism_tickets: number;
    }
  ];
};

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

  return data.data.Sponsorships as Sponsorships;
}

export type Sponsor = {
  name: string;
  website: string;
  logo: [{ url: string }];
  sponsorship: [{ price: number; css_selector: string }];
};

export async function getSponsors() {
  const data =
    (await prepr
      .graphqlQuery(
        `query {
  Sponsors {
    total
    items {
		name
		website
		sponsorship { 
    css_selector
    price
  }
		logo { 
			url
		}
	}
    }
  }`
      )
      .fetch()) || {};

  return data.data.Sponsors.items as Sponsor[];
}
