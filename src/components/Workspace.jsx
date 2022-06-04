import { IssuePreview } from "./IssuePreview";

export const IssueStatus = {
   Backlog: "backlog",
   Todo: "to-do",
   InProgress: "in-progress",
   InReview: "in-review",
   Done: "done",
   Canceled: "canceled"
}

export const AllIssues = ({ issues }) => {

   const todo = issues.filter((issue) => issue.status === IssueStatus.Todo);
   const inProgress = issues.filter(
      (issue) => issue.status === IssueStatus.InProgress
   );
   const inReview = issues.filter(
      (issue) => issue.status === IssueStatus.InReview
   );
   const done = issues.filter((issue) => issue.status === IssueStatus.Done);
   const backlog = issues.filter(
      (issue) => issue.status === IssueStatus.Backlog
   );

   return (
      <main className="relative overflow-auto flex flex-col flex-grow">
         <div className="w-full">
            <header className="flex items-center justify-between pl-9 pr-6 min-h-[57px] border-b border-accent">
               <div className="flex items-center">
                  <button className="flex items-center p-1.5 -m-1.5 rounded hover:bg-accent">
                     <span className="text-left text-gray-50 text-[13px] font-medium">
                        Active Issues
                     </span>
                  </button>
                  <span className="text-left text-gray-200 text-xs font-medium ml-2">
                     10
                  </span>
                  <div className="flex ml-4">
                     <button className="inline-flex items-center border border-[#454c69] border-dashed rounded h-6 min-w-[24px] px-2">
                        <svg
                           width="10"
                           height="10"
                           viewBox="0 0 14 14"
                           fill="#c4c8ce"
                           className="sc-caGXSI kXZkFD"
                        >
                           <path d="M0 7C0 7.23206 0.0921872 7.45462 0.256282 7.61872C0.420376 7.78281 0.642936 7.875 0.875 7.875H5.97917C6.01784 7.875 6.05494 7.89036 6.08229 7.91771C6.10964 7.94506 6.125 7.98216 6.125 8.02083V13.125C6.125 13.3571 6.21719 13.5796 6.38128 13.7437C6.54538 13.9078 6.76794 14 7 14C7.23206 14 7.45462 13.9078 7.61872 13.7437C7.78281 13.5796 7.875 13.3571 7.875 13.125V8.02083C7.875 7.98216 7.89036 7.94506 7.91771 7.91771C7.94506 7.89036 7.98216 7.875 8.02083 7.875H13.125C13.3571 7.875 13.5796 7.78281 13.7437 7.61872C13.9078 7.45462 14 7.23206 14 7C14 6.76794 13.9078 6.54538 13.7437 6.38128C13.5796 6.21719 13.3571 6.125 13.125 6.125H8.02083C7.98216 6.125 7.94506 6.10964 7.91771 6.08229C7.89036 6.05494 7.875 6.01784 7.875 5.97917V0.875C7.875 0.642936 7.78281 0.420376 7.61872 0.256282C7.45462 0.0921872 7.23206 0 7 0C6.76794 0 6.54538 0.0921872 6.38128 0.256282C6.21719 0.420376 6.125 0.642936 6.125 0.875V5.97917C6.125 6.01784 6.10964 6.05494 6.08229 6.08229C6.05494 6.10964 6.01784 6.125 5.97917 6.125H0.875C0.642936 6.125 0.420376 6.21719 0.256282 6.38128C0.0921872 6.54538 0 6.76794 0 7H0Z"></path>
                        </svg>
                        <span className="text-xs text-gray-50 font-medium ml-1.5">
                           Filter
                        </span>
                     </button>
                  </div>
               </div>
               <div className="ml-4 flex h-7">
                  <button className="inline-flex items-center justify-center rounded min-w-[28px] hover:bg-accent">
                     <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="#c4c8ce"
                        className="sc-hNqiDF bXMdHo"
                     >
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M4.34943 2.12195L4.41226 2.18673L6.84829 5.19443C6.9204 5.28346 6.95975 5.39455 6.95975 5.50912C6.95975 5.75458 6.78287 5.95873 6.54962 6.00107L6.45975 6.00912L5.2009 6.00836C5.08013 8.94612 4.75119 13.9988 4.01089 13.9988C3.42906 13.9988 3.03779 11.4583 2.83711 6.37732L2.8231 6.01007L1.50001 6.00912C1.38246 6.00912 1.26867 5.96771 1.17862 5.89215C0.990587 5.73437 0.947891 5.46765 1.06539 5.26176L1.11699 5.18773L3.64068 2.18003C3.66126 2.15551 3.68414 2.13302 3.70902 2.11288C3.89976 1.95839 4.16972 1.96734 4.34943 2.12195ZM11.2536 12.0016C11.6675 12.0016 12.003 12.3371 12.003 12.751C12.003 13.1649 11.6675 13.5004 11.2536 13.5004H8.75634C8.34245 13.5004 8.00693 13.1649 8.00693 12.751C8.00693 12.3371 8.34245 12.0016 8.75634 12.0016H11.2536ZM12.2526 9.00393C12.6665 9.00393 13.002 9.33946 13.002 9.75335C13.002 10.1672 12.6665 10.5028 12.2526 10.5028H8.75634C8.34245 10.5028 8.00693 10.1672 8.00693 9.75335C8.00693 9.33946 8.34245 9.00393 8.75634 9.00393H12.2526ZM13.2516 6.00629C13.6655 6.00629 14.001 6.34182 14.001 6.7557C14.001 7.16959 13.6655 7.50511 13.2516 7.50511H8.75634C8.34245 7.50511 8.00693 7.16959 8.00693 6.7557C8.00693 6.34182 8.34245 6.00629 8.75634 6.00629H13.2516ZM14.2506 3.00865C14.6645 3.00865 15 3.34418 15 3.75806C15 4.17195 14.6645 4.50747 14.2506 4.50747H8.75634C8.34245 4.50747 8.00693 4.17195 8.00693 3.75806C8.00693 3.34418 8.34245 3.00865 8.75634 3.00865H14.2506Z"
                        ></path>
                     </svg>
                  </button>
               </div>
            </header>
         </div>

         <div className="w-full h-full overflow-hidden flex flex-col">
            <div
               className="relative overflow-auto will-change-transform"
               style={{ height: "calc(100vh - 57px)" }}
            >
               <div className="w-full mb-4">
                  <div className="w-full h-9">
                     {inReview.length >= 1 && (
                        <div className="flex items-center h-full pl-9 mb-1 pr-6 bg-[#2f3447]">
                           <span className="flex w-4">
                              <svg
                                 width="14"
                                 height="14"
                                 viewBox="0 0 14 14"
                                 fill="none"
                              >
                                 <rect
                                    x="1"
                                    y="1"
                                    width="12"
                                    height="12"
                                    rx="6"
                                    stroke="#0f783c"
                                    strokeWidth="2"
                                    fill="none"
                                 ></rect>
                                 <path
                                    fill="#0f783c"
                                    stroke="none"
                                    d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 1,1 0, 3.5 z"
                                    transform="translate(3.5,3.5)"
                                 ></path>
                              </svg>
                           </span>
                           <span className="ml-2 text-left font-medium text-[13px] text-gray-50">
                              In Review
                           </span>
                           <span className="ml-2 text-left font-normal text-[13px] text-gray-200">
                              {inReview.length}
                           </span>
                           <div className="flex items-center justify-end flex-grow ml-2">
                              <div className="flex">
                                 <button className="px-[2px] inline-flex items-center justify-center rounded h-7 min-w-[28px] hover:bg-accent">
                                    <svg
                                       width="12"
                                       height="12"
                                       viewBox="0 0 14 14"
                                       fill="#c4c8ce"
                                    >
                                       <path d="M0 7C0 7.23206 0.0921872 7.45462 0.256282 7.61872C0.420376 7.78281 0.642936 7.875 0.875 7.875H5.97917C6.01784 7.875 6.05494 7.89036 6.08229 7.91771C6.10964 7.94506 6.125 7.98216 6.125 8.02083V13.125C6.125 13.3571 6.21719 13.5796 6.38128 13.7437C6.54538 13.9078 6.76794 14 7 14C7.23206 14 7.45462 13.9078 7.61872 13.7437C7.78281 13.5796 7.875 13.3571 7.875 13.125V8.02083C7.875 7.98216 7.89036 7.94506 7.91771 7.91771C7.94506 7.89036 7.98216 7.875 8.02083 7.875H13.125C13.3571 7.875 13.5796 7.78281 13.7437 7.61872C13.9078 7.45462 14 7.23206 14 7C14 6.76794 13.9078 6.54538 13.7437 6.38128C13.5796 6.21719 13.3571 6.125 13.125 6.125H8.02083C7.98216 6.125 7.94506 6.10964 7.91771 6.08229C7.89036 6.05494 7.875 6.01784 7.875 5.97917V0.875C7.875 0.642936 7.78281 0.420376 7.61872 0.256282C7.45462 0.0921872 7.23206 0 7 0C6.76794 0 6.54538 0.0921872 6.38128 0.256282C6.21719 0.420376 6.125 0.642936 6.125 0.875V5.97917C6.125 6.01784 6.10964 6.05494 6.08229 6.08229C6.05494 6.10964 6.01784 6.125 5.97917 6.125H0.875C0.642936 6.125 0.420376 6.21719 0.256282 6.38128C0.0921872 6.54538 0 6.76794 0 7H0Z"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                        </div>
                     )}
                     {inReview.map((issue) => (
                        <IssuePreview issue={issue} key={issue.id} />
                     ))}

                     {inProgress.length >= 1 && (
                        <div className="flex items-center h-full pl-9 mb-1 pr-6 bg-[#2f3447]">
                           <span className="flex w-4">
                              <svg
                                 width="14"
                                 height="14"
                                 viewBox="0 0 14 14"
                                 fill="none"
                              >
                                 <rect
                                    x="1"
                                    y="1"
                                    width="12"
                                    height="12"
                                    rx="6"
                                    stroke="#f2c94c"
                                    strokeWidth="2"
                                    fill="none"
                                 ></rect>
                                 <path
                                    fill="#f2c94c"
                                    stroke="none"
                                    d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 0,1 3.5, 7 z"
                                    transform="translate(3.5,3.5)"
                                 ></path>
                              </svg>
                           </span>
                           <span className="ml-2 text-left font-medium text-[13px] text-gray-50">
                              In Progress
                           </span>
                           <span className="ml-2 text-left font-normal text-[13px] text-gray-200">
                              {inProgress.length}
                           </span>
                           <div className="flex items-center justify-end flex-grow ml-2">
                              <div className="flex">
                                 <button className="px-[2px] inline-flex items-center justify-center rounded h-7 min-w-[28px] hover:bg-accent">
                                    <svg
                                       width="12"
                                       height="12"
                                       viewBox="0 0 14 14"
                                       fill="#c4c8ce"
                                    >
                                       <path d="M0 7C0 7.23206 0.0921872 7.45462 0.256282 7.61872C0.420376 7.78281 0.642936 7.875 0.875 7.875H5.97917C6.01784 7.875 6.05494 7.89036 6.08229 7.91771C6.10964 7.94506 6.125 7.98216 6.125 8.02083V13.125C6.125 13.3571 6.21719 13.5796 6.38128 13.7437C6.54538 13.9078 6.76794 14 7 14C7.23206 14 7.45462 13.9078 7.61872 13.7437C7.78281 13.5796 7.875 13.3571 7.875 13.125V8.02083C7.875 7.98216 7.89036 7.94506 7.91771 7.91771C7.94506 7.89036 7.98216 7.875 8.02083 7.875H13.125C13.3571 7.875 13.5796 7.78281 13.7437 7.61872C13.9078 7.45462 14 7.23206 14 7C14 6.76794 13.9078 6.54538 13.7437 6.38128C13.5796 6.21719 13.3571 6.125 13.125 6.125H8.02083C7.98216 6.125 7.94506 6.10964 7.91771 6.08229C7.89036 6.05494 7.875 6.01784 7.875 5.97917V0.875C7.875 0.642936 7.78281 0.420376 7.61872 0.256282C7.45462 0.0921872 7.23206 0 7 0C6.76794 0 6.54538 0.0921872 6.38128 0.256282C6.21719 0.420376 6.125 0.642936 6.125 0.875V5.97917C6.125 6.01784 6.10964 6.05494 6.08229 6.08229C6.05494 6.10964 6.01784 6.125 5.97917 6.125H0.875C0.642936 6.125 0.420376 6.21719 0.256282 6.38128C0.0921872 6.54538 0 6.76794 0 7H0Z"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                        </div>
                     )}
                     {inProgress.map((issue) => (
                        <IssuePreview issue={issue} key={issue.id} />
                     ))}

                     {todo.length >= 1 && (
                        <div className="flex items-center h-full pl-9 mb-1 pr-6 bg-[#2f3447]">
                           <span className="flex w-4">
                              <svg
                                 width="14"
                                 height="14"
                                 viewBox="0 0 14 14"
                                 fill="none"
                              >
                                 <rect
                                    x="1"
                                    y="1"
                                    width="12"
                                    height="12"
                                    rx="6"
                                    stroke="#e2e2e2"
                                    strokeWidth="2"
                                    fill="none"
                                 ></rect>
                                 <path
                                    fill="#e2e2e2"
                                    stroke="none"
                                    d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 0,1 3.5, 0 z"
                                    transform="translate(3.5,3.5)"
                                 ></path>
                              </svg>
                           </span>
                           <span className="ml-2 text-left font-medium text-[13px] text-gray-50">
                              Todo
                           </span>
                           <span className="ml-2 text-left font-normal text-[13px] text-gray-200">
                              {todo.length}
                           </span>
                           <div className="flex items-center justify-end flex-grow ml-2">
                              <div className="flex">
                                 <button className="px-[2px] inline-flex items-center justify-center rounded h-7 min-w-[28px] hover:bg-accent">
                                    <svg
                                       width="12"
                                       height="12"
                                       viewBox="0 0 14 14"
                                       fill="#c4c8ce"
                                    >
                                       <path d="M0 7C0 7.23206 0.0921872 7.45462 0.256282 7.61872C0.420376 7.78281 0.642936 7.875 0.875 7.875H5.97917C6.01784 7.875 6.05494 7.89036 6.08229 7.91771C6.10964 7.94506 6.125 7.98216 6.125 8.02083V13.125C6.125 13.3571 6.21719 13.5796 6.38128 13.7437C6.54538 13.9078 6.76794 14 7 14C7.23206 14 7.45462 13.9078 7.61872 13.7437C7.78281 13.5796 7.875 13.3571 7.875 13.125V8.02083C7.875 7.98216 7.89036 7.94506 7.91771 7.91771C7.94506 7.89036 7.98216 7.875 8.02083 7.875H13.125C13.3571 7.875 13.5796 7.78281 13.7437 7.61872C13.9078 7.45462 14 7.23206 14 7C14 6.76794 13.9078 6.54538 13.7437 6.38128C13.5796 6.21719 13.3571 6.125 13.125 6.125H8.02083C7.98216 6.125 7.94506 6.10964 7.91771 6.08229C7.89036 6.05494 7.875 6.01784 7.875 5.97917V0.875C7.875 0.642936 7.78281 0.420376 7.61872 0.256282C7.45462 0.0921872 7.23206 0 7 0C6.76794 0 6.54538 0.0921872 6.38128 0.256282C6.21719 0.420376 6.125 0.642936 6.125 0.875V5.97917C6.125 6.01784 6.10964 6.05494 6.08229 6.08229C6.05494 6.10964 6.01784 6.125 5.97917 6.125H0.875C0.642936 6.125 0.420376 6.21719 0.256282 6.38128C0.0921872 6.54538 0 6.76794 0 7H0Z"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                        </div>
                     )}
                     {todo.map((issue) => (
                        <IssuePreview issue={issue} key={issue.id} />
                     ))}

                     {backlog.length >= 1 && (
                        <div className="flex items-center h-full pl-9 mb-1 pr-6 bg-[#2f3447]">
                           <span className="flex w-4">
                              <svg width="14" height="14" viewBox="0 0 14 14">
                                 <path
                                    d="M13.9408 7.91426L11.9576 7.65557C11.9855 7.4419 12 7.22314 12 7C12 6.77686 11.9855 6.5581 11.9576 6.34443L13.9408 6.08573C13.9799 6.38496 14 6.69013 14 7C14 7.30987 13.9799 7.61504 13.9408 7.91426ZM13.4688 4.32049C13.2328 3.7514 12.9239 3.22019 12.5538 2.73851L10.968 3.95716C11.2328 4.30185 11.4533 4.68119 11.6214 5.08659L13.4688 4.32049ZM11.2615 1.4462L10.0428 3.03204C9.69815 2.76716 9.31881 2.54673 8.91341 2.37862L9.67951 0.531163C10.2486 0.767153 10.7798 1.07605 11.2615 1.4462ZM7.91426 0.0591659L7.65557 2.04237C7.4419 2.01449 7.22314 2 7 2C6.77686 2 6.5581 2.01449 6.34443 2.04237L6.08574 0.059166C6.38496 0.0201343 6.69013 0 7 0C7.30987 0 7.61504 0.0201343 7.91426 0.0591659ZM4.32049 0.531164L5.08659 2.37862C4.68119 2.54673 4.30185 2.76716 3.95716 3.03204L2.73851 1.4462C3.22019 1.07605 3.7514 0.767153 4.32049 0.531164ZM1.4462 2.73851L3.03204 3.95716C2.76716 4.30185 2.54673 4.68119 2.37862 5.08659L0.531164 4.32049C0.767153 3.7514 1.07605 3.22019 1.4462 2.73851ZM0.0591659 6.08574C0.0201343 6.38496 0 6.69013 0 7C0 7.30987 0.0201343 7.61504 0.059166 7.91426L2.04237 7.65557C2.01449 7.4419 2 7.22314 2 7C2 6.77686 2.01449 6.5581 2.04237 6.34443L0.0591659 6.08574ZM0.531164 9.67951L2.37862 8.91341C2.54673 9.31881 2.76716 9.69815 3.03204 10.0428L1.4462 11.2615C1.07605 10.7798 0.767153 10.2486 0.531164 9.67951ZM2.73851 12.5538L3.95716 10.968C4.30185 11.2328 4.68119 11.4533 5.08659 11.6214L4.32049 13.4688C3.7514 13.2328 3.22019 12.9239 2.73851 12.5538ZM6.08574 13.9408L6.34443 11.9576C6.5581 11.9855 6.77686 12 7 12C7.22314 12 7.4419 11.9855 7.65557 11.9576L7.91427 13.9408C7.61504 13.9799 7.30987 14 7 14C6.69013 14 6.38496 13.9799 6.08574 13.9408ZM9.67951 13.4688L8.91341 11.6214C9.31881 11.4533 9.69815 11.2328 10.0428 10.968L11.2615 12.5538C10.7798 12.9239 10.2486 13.2328 9.67951 13.4688ZM12.5538 11.2615L10.968 10.0428C11.2328 9.69815 11.4533 9.31881 11.6214 8.91341L13.4688 9.67951C13.2328 10.2486 12.924 10.7798 12.5538 11.2615Z"
                                    stroke="none"
                                    fill="#bec2c8"
                                 ></path>
                              </svg>
                           </span>
                           <span className="ml-2 text-left font-medium text-[13px] text-gray-50">
                              Backlog
                           </span>
                           <span className="ml-2 text-left font-normal text-[13px] text-gray-200">
                              {backlog.length}
                           </span>
                           <div className="flex items-center justify-end flex-grow ml-2">
                              <div className="flex">
                                 <button className="px-[2px] inline-flex items-center justify-center rounded h-7 min-w-[28px] hover:bg-accent">
                                    <svg
                                       width="12"
                                       height="12"
                                       viewBox="0 0 14 14"
                                       fill="#c4c8ce"
                                    >
                                       <path d="M0 7C0 7.23206 0.0921872 7.45462 0.256282 7.61872C0.420376 7.78281 0.642936 7.875 0.875 7.875H5.97917C6.01784 7.875 6.05494 7.89036 6.08229 7.91771C6.10964 7.94506 6.125 7.98216 6.125 8.02083V13.125C6.125 13.3571 6.21719 13.5796 6.38128 13.7437C6.54538 13.9078 6.76794 14 7 14C7.23206 14 7.45462 13.9078 7.61872 13.7437C7.78281 13.5796 7.875 13.3571 7.875 13.125V8.02083C7.875 7.98216 7.89036 7.94506 7.91771 7.91771C7.94506 7.89036 7.98216 7.875 8.02083 7.875H13.125C13.3571 7.875 13.5796 7.78281 13.7437 7.61872C13.9078 7.45462 14 7.23206 14 7C14 6.76794 13.9078 6.54538 13.7437 6.38128C13.5796 6.21719 13.3571 6.125 13.125 6.125H8.02083C7.98216 6.125 7.94506 6.10964 7.91771 6.08229C7.89036 6.05494 7.875 6.01784 7.875 5.97917V0.875C7.875 0.642936 7.78281 0.420376 7.61872 0.256282C7.45462 0.0921872 7.23206 0 7 0C6.76794 0 6.54538 0.0921872 6.38128 0.256282C6.21719 0.420376 6.125 0.642936 6.125 0.875V5.97917C6.125 6.01784 6.10964 6.05494 6.08229 6.08229C6.05494 6.10964 6.01784 6.125 5.97917 6.125H0.875C0.642936 6.125 0.420376 6.21719 0.256282 6.38128C0.0921872 6.54538 0 6.76794 0 7H0Z"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                        </div>
                     )}
                     {backlog.map((issue) => (
                        <IssuePreview issue={issue} key={issue.id} />
                     ))}

                     {done.length >= 1 && (
                        <div className="flex items-center h-full pl-9 mb-1 pr-6 bg-[#2f3447]">
                           <span className="flex w-4">
                              <svg width="14" height="14" viewBox="0 0 14 14">
                                 <path
                                    fill="#5e6ad2"
                                    stroke="#5e6ad2"
                                    d="M9.54541 3.54541L9.89896 3.89896L9.54541 3.54541L5.5 7.59081L4.45459 6.54541C3.92739 6.0182 3.07261 6.0182 2.54541 6.54541C2.0182 7.07261 2.0182 7.92739 2.54541 8.45459L4.54541 10.4546C5.07261 10.9818 5.92739 10.9818 6.45459 10.4546L11.4546 5.45459C11.9818 4.92739 11.9818 4.07261 11.4546 3.54541L11.101 3.89896L11.4546 3.54541C10.9274 3.0182 10.0726 3.0182 9.54541 3.54541ZM0.5 7C0.5 3.41015 3.41015 0.5 7 0.5C10.5899 0.5 13.5 3.41015 13.5 7C13.5 10.5899 10.5899 13.5 7 13.5C3.41015 13.5 0.5 10.5899 0.5 7Z"
                                 ></path>
                              </svg>
                           </span>
                           <span className="ml-2 text-left font-medium text-[13px] text-gray-50">
                              Done
                           </span>
                           <span className="ml-2 text-left font-normal text-[13px] text-gray-200">
                              {done.length}
                           </span>
                           <div className="flex items-center justify-end flex-grow ml-2">
                              <div className="flex">
                                 <button className="px-[2px] inline-flex items-center justify-center rounded h-7 min-w-[28px] hover:bg-accent">
                                    <svg
                                       width="12"
                                       height="12"
                                       viewBox="0 0 14 14"
                                       fill="#c4c8ce"
                                    >
                                       <path d="M0 7C0 7.23206 0.0921872 7.45462 0.256282 7.61872C0.420376 7.78281 0.642936 7.875 0.875 7.875H5.97917C6.01784 7.875 6.05494 7.89036 6.08229 7.91771C6.10964 7.94506 6.125 7.98216 6.125 8.02083V13.125C6.125 13.3571 6.21719 13.5796 6.38128 13.7437C6.54538 13.9078 6.76794 14 7 14C7.23206 14 7.45462 13.9078 7.61872 13.7437C7.78281 13.5796 7.875 13.3571 7.875 13.125V8.02083C7.875 7.98216 7.89036 7.94506 7.91771 7.91771C7.94506 7.89036 7.98216 7.875 8.02083 7.875H13.125C13.3571 7.875 13.5796 7.78281 13.7437 7.61872C13.9078 7.45462 14 7.23206 14 7C14 6.76794 13.9078 6.54538 13.7437 6.38128C13.5796 6.21719 13.3571 6.125 13.125 6.125H8.02083C7.98216 6.125 7.94506 6.10964 7.91771 6.08229C7.89036 6.05494 7.875 6.01784 7.875 5.97917V0.875C7.875 0.642936 7.78281 0.420376 7.61872 0.256282C7.45462 0.0921872 7.23206 0 7 0C6.76794 0 6.54538 0.0921872 6.38128 0.256282C6.21719 0.420376 6.125 0.642936 6.125 0.875V5.97917C6.125 6.01784 6.10964 6.05494 6.08229 6.08229C6.05494 6.10964 6.01784 6.125 5.97917 6.125H0.875C0.642936 6.125 0.420376 6.21719 0.256282 6.38128C0.0921872 6.54538 0 6.76794 0 7H0Z"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                        </div>
                     )}
                     {done.map((issue) => (
                        <IssuePreview issue={issue} key={issue.id} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};
