import fridayReportAutomation from "./fridayReportAutomation";

// Call fridayReportAutomation every X seconds
export default async function fridayReportAutomationLoop() {
    // while (true) {
    //     // await fridayReportAutomation();
    //     // await new Promise(r => setTimeout(fridayReportAutomation(), 1 * 5 * 1000));

    //         setInterval(() => {
    //         console.log("Hello")
    //     }, 3000);

    // };



    // // repeat with the interval of 2 seconds
    // let timerId = setInterval(fridayReportAutomation(), 2000);

    // // let timerId = setInterval(() => alert('tick'), 2000);

    // // after 5 seconds stop
    // setTimeout(() => { clearInterval(timerId); alert('stop'); }, 10000); // Stop loop after a maximum of 6 hours.





    // return await new Promise(resolve => {
    //     const interval = setInterval(() => {
    //     if (true) {
    //         resolve('foo');
    //         clearInterval(interval);
    //     };
    //     }, 1000);
    // });




    // async function delay(ms) {
    //     // return await for better async stack trace support in case of errors.
    //     return await new Promise(resolve => setTimeout(resolve, ms));
    // };


    // let run = async () => {
    //     await delay(2000);
    //     console.log("Hello");
    //     // fridayReportAutomation();
    // };

    // while (true) {
    //     run();
    // };



    // Works
    // async function first() {
    //     console.log('first')
    // };

    // async function second() {
    //     console.log('second')
    // };

    // async function test() {
    //     await new Promise(resolve => setTimeout(() => resolve(first()), 2000));
    //     await new Promise(resolve => setTimeout(() => resolve(second()), 2000));
    // };
    // test();



    async function test() {
        await new Promise(resolve => setTimeout(() => resolve(fridayReportAutomation()), 2000));
    };
    test();




};