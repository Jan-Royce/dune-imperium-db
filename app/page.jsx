import { Card } from 'components/card';
import { Items } from 'components/items';
import { getNetlifyContext } from 'utils';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="flex flex-col gap-4">
                <Items />
            </section>
        </div>
    );
}