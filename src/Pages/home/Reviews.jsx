import Image1 from "../../assets/sarah.jpeg";
import StarIcon from "@mui/icons-material/Star";
const User = ({ src, name, role }) => {
  return (
    <div className="flex">
      <img
        className="w-10 rounded-full px-1 h-10 mt-8"
        src={src}
        alt="Sarah's picture"
      />
      <div className="mb-3">
        <h2>{name}</h2>
        <h3>{role}</h3>
      </div>
    </div>
  );
};
const reviews = [
  {
    id: 1,
    icon: (
      <span>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </span>
    ),
    content:"xpendee has completely transformed how I manage my money. The automatic categorization saves me hours every month, and the insights have helped me cut unnecessary spending.",
    user: <User src={Image1} name="Sarah Johnson" role="Marketing Manager" />,
  },
  {
    id: 2,
    icon: (
      <span>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </span>
    ),
    content:
       "Being able to connect all my payment apps in one place has been a game-changer. The visualizations make it so easy to understand where my money is going each month." ,
    user: <User src={Image1} name="Aisha Patel" role="Small Business Owner" />,
  },
  {
    id: 3,
    icon: (
      <span>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </span>
    ),
    content:
      "The spending alerts have saved me so much money! I was overspending without realizing it, but now I\'m much more aware of my habits and have actually started saving.",
    user: <User src={Image1} name="David Chen" role="Software Developer" />,
  },
];

export default reviews;
