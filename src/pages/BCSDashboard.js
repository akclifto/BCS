import React from 'react';

const lorem = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
]

const randomText = () => {
    const getLine = Math.floor(Math.random() * lorem.length);
    // console.log(`getLine: ${getLine}`);
    const min = 20;
    const getLength = Math.floor((Math.random() * lorem[getLine].length) + min);
    // console.log(`getLength: ${getLength}`);
    const sub = Math.floor((Math.random() * lorem[getLine].length) - (min + 1));
    // console.log(`sub: ${sub}`);
    const randoLorem = lorem[getLine].substring(sub, getLength);
    // console.log(`result: ${randoLorem}`);
    return randoLorem;
};

const randomHeadline = () => {
    let headline = randomText();
    const min = 5;
    const max = 30;

    while (headline.length > max || headline.length < min) {
        headline = randomText();
    }
    return headline;
};

const BCSDashboard = () => (

    <div className="container">
        <div className="dash">
            <div className="dash__component">
                <div className="dash__component-header">
                    Services
                </div>
                <div className="dash__list">
                    <ul className="dash__list--headline">
                        {randomHeadline()}:
                    </ul>
                    <li> {randomText()} </li>
                    <li> {randomText()} </li>

                    <ul className="dash__list--headline">
                        {randomHeadline()}:
                    </ul>
                    <li> {randomText()} </li>
                </div>
            </div>
            <div className="dash__component">
                <div className="dash__component-header">
                    Donations
                </div>
                <div className="dash__list">
                    <ul className="dash__list--headline">
                        {randomHeadline()}:
                    </ul>
                    <li> {randomText()} </li>
                    <li> {randomText()} </li>

                    <ul className="dash__list--headline">
                        {randomHeadline()}:
                    </ul>
                    <li> {randomText()} </li>
                </div>
            </div>
            <div className="dash__component">
                <div className="dash__component-header">
                    Volunteering
                </div>
                <div className="dash__list">
                    <ul className="dash__list--headline">
                        {randomHeadline()}:
                </ul>
                    <li> {randomText()} </li>

                    <ul className="dash__list--headline">
                        {randomHeadline()}:
                    </ul>
                    <li> {randomText()} </li>
                    <ul className="dash__list--headline">
                        {randomHeadline()}:
                    </ul>
                <li> {randomText()} </li>
                </div>
            </div>
            <div className="dash__component">
                <div className="dash__component-header">
                    Community
                </div>
                <div className="dash__list">
                    <ul className="dash__list--headline">
                        {randomHeadline()}:
                    </ul>
                    <li> {randomText()} </li>
                    <li> {randomText()} </li>
                    <li> {randomText()} </li>

                    <ul className="dash__list--headline">
                        {randomHeadline()}:
                    </ul>
                    <li> {randomText()} </li>
                    <li> {randomText()} </li>
                    <li> {randomText()} </li>
                </div>
            </div>

        </div>
    </div>
);

export default BCSDashboard;