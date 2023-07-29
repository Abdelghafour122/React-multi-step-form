export type AddonType = {
  title: string;
  desc: string;
  price: { monthly: number; yearly: number };
};

export enum PlanEnum {
  Arcade = "Arcade",
  Advanced = "Advanced",
  Pro = "Pro",
}

export type PlanType = {
  image: string;
  type: PlanEnum;
  price: {
    yearly: number;
    monthly: number;
  };
};

export type StepType = {
  num: number;
  stepName: string;
  navPath: string;
};
