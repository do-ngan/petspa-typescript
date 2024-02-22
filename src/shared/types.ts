export enum SelectedPage {
    Home = "home",
    Petnefits = "petnefits",
    OurPackages = "ourpackages",
    ContactUs = "contactus",
  }

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
