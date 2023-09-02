import SectionMenuLeftHeader from "./SectionMenuLeftHeader";
import SectionMenuLefMenu from "./SectionMenuLefMenu";

export default function SectionMenuLeft(){
    return(
        <div style={{width:'100vw'}}>
            <SectionMenuLeftHeader/>
            <SectionMenuLefMenu/>
        </div>
    );
}