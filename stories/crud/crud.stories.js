import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import crudOverview from './overview.vue';
import overview from './overview.md';
import usage from './usage.md';
import SlotAppendRowActions from './slot-append-row-actions.vue';
import SlotAppendRowActionsMd from './slot-append-row-actions.md';
import SlotRewriteRowActions from './slot-rewrite-row-actions.vue';
import SlotRewriteRowActionsMd from './slot-rewrite-row-actions.md';
import SlotLeftActions from './slot-left-actions.vue';
import SlotLeftActionsMd from './slot-left-actions.md';

storiesOf('MineCrud', module)
    .addDecorator(withKnobs)
    .addParameters({
        readme: {
            content: overview,
            sidebar: usage
        }
    })
    .add('总览', () => ({
        components: {
            crudOverview
        },
        props: {
            hasRowDelBtn: {
                default: boolean('hasRowDelBtn', true)
            },
            hasRowEditBtn: {
                default: boolean('hasRowEditBtn', true)
            },
            hasBatchDelBtn: {
                default: boolean('hasBatchDelBtn', true)
            },
            hasAddBtn: {
                default: boolean('hasAddBtn', true)
            },
            hasExportCsvBtn: {
                default: boolean('hasExportCsvBtn', true)
            }
        },
        template: `<crudOverview
        :hasRowDelBtn="hasRowDelBtn"
        :hasRowEditBtn="hasRowEditBtn"
        :hasBatchDelBtn="hasBatchDelBtn"
        :hasAddBtn="hasAddBtn"
        :hasExportCsvBtn="hasExportCsvBtn"
        />`
    }))
    .addParameters({
        readme: {
            content: SlotAppendRowActionsMd,
            sidebar: usage
        }
    })
    .add('slot:添加行内操作', () => ({
        components: {
            SlotAppendRowActions
        },
        render(h) {
            return <SlotAppendRowActions />;
        }
    }))
    .addParameters({
        readme: {
            content: SlotRewriteRowActionsMd,
            sidebar: usage
        }
    })
    .add('slot:覆盖行内操作', () => ({
        components: {
            SlotRewriteRowActions
        },
        render(h) {
            return <SlotRewriteRowActions />;
        }
    }))
    .addParameters({
        readme: {
            content: SlotLeftActionsMd,
            sidebar: usage
        }
    })
    .add('slot:添加顶部左侧操作', () => ({
        components: {
            SlotLeftActions
        },
        render(h) {
            return <SlotLeftActions />;
        }
    }));
