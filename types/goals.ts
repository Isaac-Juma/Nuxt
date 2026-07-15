// API TALKS WITH THIS CLASS METHODS TO CREATE GOALS AND HANDLE THEM
export class goalController {
  // simple Goal class to hold created goals
  static goal: {
    id: number,
    title: string,
    description: string,
    done: boolean
  }

  // this method 
  handleGoal(goal: { title: string, description: string, done: boolean }) {
    // Take the goal data and create a new goal object
    const newGoal = {
      id: Date.now(), // simple unique ID based on timestamp
      title: goal.title,
      description: goal.description,
      done: goal.done
    };

    // Here you would typically save the newGoal to a database
    // For demonstration, we're just returning the new goal object
    return newGoal;
        
  }


}