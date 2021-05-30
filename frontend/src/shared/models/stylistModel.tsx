export interface Stylist {
  _id: number;
  personalData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    birthYear: number;
    zipcode: string;
  };
  profileData: {
    title: string;
    url: string;
    img: string;
    text: string;
    position: {
      hairStylist: boolean;
      makeupStylist: boolean;
    };
    hairStylExp: number;
    makeupStylExp: number;
    city: string;
  };
}
