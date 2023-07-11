import { accountSteps } from './account';
import { trainingCampaignSteps } from './trainingCampaigns';
import { trainingEnrollmentSteps } from './trainingEnrollments';
import { userSteps } from './users';

const integrationSteps = [
  ...accountSteps,
  ...userSteps,
  ...trainingCampaignSteps,
  ...trainingEnrollmentSteps,
];

export { integrationSteps };
