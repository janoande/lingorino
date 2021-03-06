import { h, Component } from 'preact';
import TemplateEditor from './templateEditor';
import TargetLang from './targetLang';
import * as langs from 'langs';
import { ShouldExpandText } from '../content/wordPopup/Card/cardTemplate';
import getSetting from '../common/getSetting';

interface SettingsState {
    targetLanguage: string
}

export default class SettingsForm extends Component<any, SettingsState> {
    onTargetLangChange = (e: Event): void => {
        const language = (e.currentTarget as HTMLInputElement).value;
        this.setState({ targetLanguage: language });
    };
    saveSettings = (): void => {
        browser.storage.sync.set({
            targetLanguage: this.state.targetLanguage
        });
    };
    restoreSettings = (): void => {
        getSetting("targetLanguage").then((targetLanguage) => {
            this.setState({ targetLanguage: targetLanguage as string });
        });
    };
    componentWillMount(): void {
        this.restoreSettings();
    }
    render(_props: any, state: SettingsState) {
        const templateData = {
            word: "word",
            sentence: "sentence",
            definition: "definition",
            title: "page title"
        };
        return (
            <form onSubmit={this.saveSettings}>
                <TargetLang onInput={this.onTargetLangChange} languages={langs.all()} curLang={state.targetLanguage} />
                <button type="submit">Save target language</button>
                <TemplateEditor expand={ShouldExpandText.No} templateData={templateData} />
            </form>
        );
    }
}
