import React from "react";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Subheading from "../components/Subheading";
import BulletPoint from "../components/BulletPoint";

export default function RefundPolicy() {
  const date = "July 10, 2024";
  const company_information = "BaljeetKode";
  const company_address = "Delhi, India";
  const website_name = "Scene";
  const website_url = "https://www.sceneweb.app/";
  const website_contact_email = "contact@baljeetkode.com";
  const website_contact_page_url = "https://www.sceneweb.app/contact";
  return (
    <div className="w-full h-full bg-primary flex flex-col items-center">
      <div className="w-full h-20 sm:h-1/6 flex bg-primary-light items-center border-b-2">
        <div className="w-28 flex justify-center">
          <img src="./logo.svg" className="h-14" />
        </div>
        <div className="w-auto flex justify-center">
          <p className="font-sans font-medium text-xl text-secondary">
            Refund Policy
          </p>
        </div>
      </div>
      <div className="w-full h-5/6 flex flex-col items-center overflow-y-scroll">
        <div className="w-full sm:w-5/6 flex flex-col bg-primary-light items-center mt-16  sm:py-12 sm:px-24 py-8 px-8 text-wrap">
          <Heading heading={"Return & Refund Policy"} />
          <Paragraph
            paragraph={`Our Return and Refund Policy was last updated ${date}`}
          />
          <Paragraph paragraph={`Thank you for shopping at ${website_name}`} />
          <Paragraph
            paragraph={`If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on
refunds and returns. This Return and Refund Policy was generated by TermsFeed Return and Refund
Policy Generator.
`}
          />
          <Paragraph
            paragraph={`The following terms are applicable for any products that You purchased with Us.`}
          />
          <Heading heading={"Interpretation and Definitions"} />
          <Subheading subheading={"Interpretation"} />
          <Paragraph
            paragraph={`The words of which the initial letter is capitalized have meanings defined under the following conditions.
The following definitions shall have the same meaning regardless of whether they appear in singular or in
plural.
`}
          />
          <Subheading subheading={"Definitions"} />
          <Paragraph
            paragraph={`For the purposes of this Return and Refund Policy:`}
          />
          <BulletPoint
            highlightedText={"Company"}
            statement={` (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to
${company_information}`}
          />
          <BulletPoint
            highlightedText={"Goods"}
            statement={`refers to the items offered for sale on the Service.`}
          />
          <BulletPoint
            highlightedText={"Orders"}
            statement={`means a request by You to purchase Goods from Us.`}
          />
          <BulletPoint
            highlightedText={"Service"}
            statement={`refers to the Website.`}
          />
          <BulletPoint
            highlightedText={"Website"}
            statement={`refers to ${website_name}, accessible from ${website_url}`}
          />
          <BulletPoint
            highlightedText={"You"}
            statement={`means the individual accessing or using the Service, or the company, or other legal entity on
behalf of which such individual is accessing or using the Service, as applicable.`}
          />
          <Heading heading={"Your Order Cancellation Rights"} />
          <Paragraph
            paragraph={`You are entitled to cancel Your Order within 14 days without giving any reason for doing so.`}
          />
          <Paragraph
            paragraph={`The deadline for cancelling an Order is 14 days from the date on which You received the Goods or on
                which a third party you have appointed, who is not the carrier, takes possession of the product delivered.`}
          />
          <Paragraph
            paragraph={`In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear
                statement. You can inform us of your decision by:`}
          />
          <BulletPoint
            statement={`By visiting this page on our website: ${website_contact_page_url}`}
          />
          <BulletPoint
            statement={`By sending us an email: ${website_contact_email}`}
          />
          <Paragraph
            paragraph={`We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will
                use the same means of payment as You used for the Order, and You will not incur any fees for such
                reimbursement.
                `}
          />
          <Heading heading={"Conditions for Returns"} />
          <Paragraph
            paragraph={`In order for the Goods to be eligible for a return, please make sure that:`}
          />
          <BulletPoint
            statement={`The Goods were purchased in the last 14 days`}
          />
          <BulletPoint statement={`The Goods are in the original packaging`} />
          <BulletPoint statement={`The following Goods cannot be returned:`} />
          <BulletPoint
            level={6}
            statement={`The supply of Goods made to Your specifications or clearly personalized.`}
          />
          <BulletPoint
            level={6}
            statement={`The supply of Goods which according to their nature are not suitable to be returned,
deteriorate rapidly or where the date of expiry is over.`}
          />
          <BulletPoint
            level={6}
            statement={`The supply of Goods which are not suitable for return due to health protection or hygiene
reasons and were unsealed after delivery.
`}
          />
          <BulletPoint
            level={6}
            statement={`The supply of Goods which are, after delivery, according to their nature, inseparably mixed
with other items.`}
          />
          <Paragraph
            paragraph={`We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in
our sole discretion.`}
          />
          <Heading heading={"Returning Goods"} />
          <Paragraph
            paragraph={`You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the
following address:`}
          />
          <Paragraph paragraph={`${company_address}`} />
          <Paragraph
            paragraph={`We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend
                an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods
                or proof of received return delivery.`}
          />
          <Heading heading={"Gifts"} />
          <Paragraph
            paragraph={`If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift
credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to
You.`}
          />
          <Paragraph
            paragraph={`If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to
themselves to give it to You later, We will send the refund to the gift giver.`}
          />
          <Heading heading={"Contact Us"} />
          <Paragraph
            paragraph={`If you have any questions about our Returns and Refunds Policy, please contact us:`}
          />
          <BulletPoint
            statement={`By visiting this page on our website: ${website_contact_page_url}`}
          />
          <BulletPoint
            statement={`By sending us an email: ${website_contact_email}`}
          />
        </div>
      </div>
    </div>
  );
}
