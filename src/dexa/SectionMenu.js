import SectionMenuLeft from "./SectionMenuLeft";
import SectionMenuRight from "./SectionMenuRight";

export default function SectionMenu(){
    return(
        <div className="d-block d-xl-flex justify-content-between" >
            <SectionMenuLeft/>
            <SectionMenuRight/>
        </div>
    );
}