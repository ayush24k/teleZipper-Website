import Tag from "../../../components/Tag";
import UsesCard from "../../../components/UsesCard";

const usesList = [
    {
        icon: "",
        title: "jkcnaskc",
        description: "asbcja casbcaskj ckjckjansc asjkcnaskc jkanckasn kjaxnkasnx"
    }, {
        icon: "",
        title: "jkcnaskc ausdiah jkasndk",
        description: "asbcja casbcaskj ckjckjansc asjkcnaskc jkanckasn kjaxnkasnx"
    }, {
        icon: "",
        title: "jkcnaskc ausdiah jkasndk",
        description: "asbcja casbcaskj ckjckjansc asjkcnaskc jkanckasn kjaxnkasnx"
    }, {
        icon: "",
        title: "jkcnaskc ausdiah jkasndk",
        description: "asbcja casbcaskj ckjckjansc asjkcnaskc jkanckasn kjaxnkasnx"
    },
]

export default function Uses() {
    return (
        <section className="py-24 flex justify-center">
            <div className="container lg:flex items-center gap-32 px-6">
                <div>
                    <Tag>Uses</Tag>
                    <h2 className="font-medium text-6xl mt-6">soome of problems <span className="text-yellow-400">we solve</span></h2>
                    <p className="text-black/40 mt-4 text-lg">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, corrupti laborum accusamus blanditiis nemo optio.
                     </p>
                </div>

                <div className="h-[400px] lg:h-[800px] mt-8 grid md:grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_90%,transparent)]">
                    <UsesCard usesList={usesList} />
                    <UsesCard usesList={usesList.slice().reverse()} className="hidden md:flex" reverse />
                </div>
            </div>
        </section>
    )
}