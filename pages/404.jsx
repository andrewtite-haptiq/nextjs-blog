import Image from "next/image";
import UtilStyles from "../styles/utils.module.scss";
import Link from "next/link";

export default function Custom404() {
    return (
      <>
        <div className={UtilStyles.center} style={{ textAlign: 'center'}}>
          <Image
            src="/images/not-the-droids.jpg"
            alt="404"
            width={500}
            height={500}
            className="object-contain"
          />
          <h1 className={UtilStyles.headingLg}>404</h1>
          <h2 className={UtilStyles.headingMd}>
            This is not the page you're looking for.<br/>
            You can go about your business.
          </h2>
          <Link href={`/`}>&larr; Move along.</Link>
        </div>
      </>
    );
}
