import SectionHeader from "./SectionHeader";
import SectionMenu from "./SectionMenu";

export default function Section(){
    return(
        <div className="bg-body-tertiary p-3">
            <SectionHeader/>
            <SectionMenu/>
        </div>
    );
}