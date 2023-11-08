import Image from "next/image";
import { CountryTypeData } from "~/pages";

const Country = (country: CountryTypeData) => {
  console.log("country", country);

  const {
    flags: { png, svg, alt },
  } = country;

  return (
    <div className="space-y-3">
      <Image src={svg} alt={alt} width={100} height={100} />
    </div>
  );
};

export default Country;
