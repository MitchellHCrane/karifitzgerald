import "../css/getStarted.css";
import GetStartedItem from "../Components/GetStartedItem";

function GetStarted() {
  return (
    <div className="getStarted-div" id="getStarted">
      <div className="getStartedBackground">
        <h2 className="getStartedH2">Resources</h2>
        <p className="getStartedP">
          Here are some helpful links to get you started with the purchase of
          your next home.
        </p>
      </div>
      <div className="grid-container">
        <GetStartedItem
          title="Loan Application"
          description="Create your account to apply with
          First Class Home Mortgage."
          url="https://www.blink.mortgage/app/signup/p/firstclasshomemortgagellc/karifitzgerald"
          iconName="applicationIcon"
          btnText="Start Application"
        />

        <GetStartedItem
          title="Framework Loan Education"
          description="Educate yourself for smart homeownership with Framework, you’ll navigate every step of the process with confidence at no cost to you."
          url="https://uwm.frameworkhomeownership.org/"
          iconName="loanEducationIcon"
          btnText="Start Learning"
        />

        <GetStartedItem
          title="Upload Documents"
          description="Safely and securely send documents through DocumentGuardian."
          url="https://documentguardian.com/filedrop/kari@firstclasshomemortgage.com"
          iconName="uploadDocumentIcon"
          btnText="Upload Documents"
        />
      </div>
    </div>
  );
}

export default GetStarted;
