import importAsString from "@reactioncommerce/api-utils/importAsString.js";
const stripeCustomer = importAsString("./stripeCustomer.graphql");
const stripeAccount = importAsString("./stripeAccount.graphql");
const stripePayment = importAsString("./stripePayment.graphql");
const stripeProduct = importAsString("./stripeProduct.graphql");
const stripePayouts = importAsString("./stripePayouts.graphql");
const stripeSubscriptions = importAsString("./stripeSubscriptions.graphql");
export default [stripeCustomer, stripeAccount, stripePayment, stripeProduct, stripePayouts, stripeSubscriptions];
