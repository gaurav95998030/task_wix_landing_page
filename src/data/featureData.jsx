

import authenticatImage from '../assets/featureImages/authenticationFeature.jpeg'

import completeImage from '../assets/featureImages/completedFeature.jpeg'

import categoryImage from '../assets/featureImages/categorizeFeature.jpeg'
import graphImage from '../assets/featureImages/graphjsFeature.jpeg'

import calenderImage from '../assets/featureImages/calenderFeature.jpeg'


 const featureDataList = [
  {
    title: "Authentication",
    description:"To streamline the onboarding process, the app offers seamless Google sign-up integration. This allows users to quickly and securely create accounts using their Google credentials, making it convenient to get started without lengthy registration processes. Google sign-up also ensures account syncing across multiple devices",
    imageUrl:authenticatImage
  },
  {
    title: "Categorization",
    description:"In this task manager app, users can easily categorize tasks by priority, ensuring that high-importance tasks stand out. This feature allows users to efficiently organize their workflow, enabling them to focus on critical tasks first. By visually distinguishing tasks through priority levels, users can manage their time better and stay on top of deadlines",
    imageUrl:categoryImage
  },
  {
    title: "Completion",
    description:"Keeping track of progress is essential, and the app enables users to mark tasks as completed or incomplete with a simple toggle. This feature enhances task management by providing clear visibility into what’s done and what’s pending, making it easier for users to track their daily accomplishments and unfinished goals.",
   imageUrl:completeImage
  },
  {
    title: "Visualization",
    description:"The app integrates data visualization to help users analyze their productivity trends. With different graphs representing task completion over time, users can gain insights into their efficiency. These visual reports offer an engaging way to monitor progress, identify patterns, and make adjustments for better productivity in the future",
    imageUrl:graphImage
  },
  {
    title: "Highlights",
    description:"The calendar feature in the app visually guides users toward task completion, using green highlights for completed tasks and red for unfinished ones. This intuitive system provides users with a clear overview of their productivity over time, encouraging them to stay on track and complete pending tasks efficiently. The color-coded system simplifies task monitoring at a glance.",
    imageUrl:calenderImage
  },
]



export default featureDataList;