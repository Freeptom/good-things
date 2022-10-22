import { createStore } from "vuex";
import { ROUTE_NAMES, ROUTE_LINKS } from "@/constants";

export default createStore({
  state() {
    return {
      primaryRoutes: {
        home: { name: ROUTE_NAMES.HOME, link: ROUTE_LINKS.HOME },
        whatWeDo: {
          name: ROUTE_NAMES.WHAT_WE_DO,
          link: ROUTE_LINKS.WHAT_WE_DO,
        },
        digitalDivide: {
          name: ROUTE_NAMES.DIGITAL_DIVIDE,
          link: ROUTE_LINKS.DIGITAL_DIVIDE,
        },
        getInvolved: {
          name: ROUTE_NAMES.GET_INVOLVED,
          link: ROUTE_LINKS.GET_INVOLVED,
        },
        ourNetwork: {
          name: ROUTE_NAMES.OUR_NETWORK,
          link: ROUTE_LINKS.OUR_NETWORK,
        },
        insights: {
          name: ROUTE_NAMES.INSIGHTS,
          link: ROUTE_LINKS.INSIGHTS,
        },
      },
      secondaryRoutes: {
        learn: { name: ROUTE_NAMES.LEARN, link: ROUTE_LINKS.LEARN },
        donate: {
          name: ROUTE_NAMES.DONATE,
          link: ROUTE_LINKS.DONATE,
        },
      },
      whoOptions: ["an individual", "a business"],
      wantOptions: ["to learn", "to donate"],
      whoSelection: "an individual",
      wantSelection: "to learn",
      programmes: [
        {
          title: "Get online week",
          description: "Lorem ipsum dolor sit amet",
          cta: "Read more",
          link: "/",
        },
        {
          title: "Learn my way",
          description: "Lorem ipsum dolor sit amet",
          cta: "Read more",
          link: "/",
        },
        {
          title: "Make it click",
          description: "Lorem ipsum dolor sit amet",
          cta: "Read more",
          link: "/",
        },
        {
          title: "Digital You",
          description: "Lorem ipsum dolor sit amet",
          cta: "Read more",
          link: "/",
        },
      ],
    };
  },
  mutations: {
    updateWhoSelection(state, payload) {
      state.whoSelection = payload;
    },
    updateWantSelection(state, payload) {
      state.wantSelection = payload;
    },
  },
});
