import { Accordion } from "../components";
import { Member10,Member9,Member1 } from "../assets/images";

const FaqSection = () => {
  return (
    <div className="container  mx-auto md:px-6 text-center  font-PJ">
      <div className="leading-[48px]">
        <h2 className="mb-6 text-gray-900 text-4xl font-semibold leading-[44px]">
          Frequently asked questions
        </h2>
        <p className=" mx-auto text-center text-gray-500 lg:text-xl font-normal leading-[30px]  sm:text-sm max-sm:px-8">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <Accordion
          data={[
            
            {
              key: "Is there a free trial available?",
              value:
                "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
         
              },
            {
              key: "Can I change my plan later?",
              value:
                "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
         
              },
          
            {
              key: "Can other info be added to an ",
              value:
                "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
          },
          
            {
              key: "Can other info be added to an invoice?",
              value:
              "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
            {
              key: "How does billing work?",
              value:
              "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
            {
              key: "How do I change my account email?",
              value:
              "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
          
          ]}
          keyAttr="key"
          valAttr="value"
        />
        <div className="px-20 py-10 max-sm:px-4">
       <div className="w-full p-8  max-sm:px-4 bg-white rounded-2xl shadow flex-col justify-start items-center gap-8 inline-flex">
    <div className="w-[120px] h-14 relative">
    
        <img className="w-12 h-12 left-0 top-[8px] absolute rounded-[200px] border border-white"src={Member9} />

        <img className="w-12 h-12 left-[72px] top-[8px] absolute rounded-[200px] border border-white"  src={Member10} />
        <img className="w-14 h-14 left-[32px] top-0 absolute rounded-[200px] border border-white" src={Member1}/>
    </div>
    <div className="flex-col justify-start items-center gap-2 flex">
        <div className="self-stretch text-center text-gray-900 text-xl font-medium leading-[30px]">Still have questions?</div>
        <div className="text-center text-gray-500 text-lg font-normal leading-7">Can’t find the answer you’re looking for? Please chat to our friendly team.</div>
    </div>
    <div className="justify-start items-start gap-3 inline-flex">
        <div className="rounded-lg justify-start items-start flex">
            <div className="p-4 bg-zinc-900 rounded-[10px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-base font-bold leading-normal">Get in touch</div>
            </div>
        </div>
    </div>
</div>
      </div>
    </div>
    
  );
};

export default FaqSection;
