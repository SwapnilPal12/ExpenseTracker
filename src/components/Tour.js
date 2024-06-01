import { useEffect } from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";

const Tour = () => {
  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true,
        },
        classes: "shadow-md bg-purple-dark",
        scrollTo: { behavior: "smooth", block: "center" },
      },
      useModalOverlay: true,
    });

    tour.addStep({
      id: "welcome",
      text: "Welcome to the Expense Tracker!",
      attachTo: { element: ".App", on: "top" },
      buttons: [
        {
          text: "Next",
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: "add-expense",
      text: "Here you can add a new expense.",
      attachTo: { element: ".add-expense-form", on: "right" },
      buttons: [
        {
          text: "Next",
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: "statistics",
      text: "Check your expense statistics here.",
      attachTo: { element: ".statistics", on: "left" },
      buttons: [
        {
          text: "Next",
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: "expense-list",
      text: "See all your expenses listed here.",
      attachTo: { element: ".expense-list", on: "bottom" },
      buttons: [
        {
          text: "Finish",
          action: tour.complete,
        },
      ],
    });

    tour.start();

    return () => {
      tour.complete();
    };
  }, []);

  return null;
};

export default Tour;
