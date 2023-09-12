import { SuggestionBox } from "../../components/SuggestionBox/SuggestionBox";

export const ListSuggestionBox = () => {
  return (
    <div className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
      <div className="h-full flex ml-1 md:w-full md:m-auto md:mb-4 gap-0 md:gap-2 justify-center">
        <div className="grow">
          <div className="absolute bottom-full left-0 mb-4 flex w-full grow gap-2 px-1 pb-1 sm:px-2 sm:pb-0 md:static md:mb-0 md:max-w-none">
            <div className="grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3">
              <div className="flex flex-col gap-3">
                <div className="opacity-0 animate-[wiggle_700ms_ease-in-out_200ms_forwards]">
                  <SuggestionBox
                    title="Create a charter"
                    text=" to start a film club"
                  />
                </div>
                <div className="opacity-0 animate-[wiggle_700ms_ease-in-out_500ms_forwards]">
                  <SuggestionBox
                    title="Brainstorm names"
                    text="for an orange cat we're adopting from the shelter"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="opacity-0 animate-[wiggle_700ms_ease-in-out_500ms_forwards]">
                  <SuggestionBox
                    title="Write an email"
                    text="requesting a deadline extension for my project"
                  />
                </div>
                <div className="opacity-0 animate-[wiggle_700ms_ease-in-out_800ms_forwards]">
                  <SuggestionBox
                    title="Help me pick"
                    text="a birthday gift for my mom who likes gardening"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
