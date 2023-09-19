import * as React from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Button, Divider, Loader, Input, Text, Header } from '@fluentui/react-northstar';
import cssStyles from '../../settings.module.scss';
import EmailEditor from 'react-email-editor';

// Define your static email template
const staticTemplate = {
  templateJson: JSON.stringify({
    body: {
      rows: [
        {
          cells: [
            {
              rows: [
                {
                  type: 'text',
                  data: {
                    text: 'Hello,',
                  },
                  attributes: {
                    'data-testid': 'text',
                  },
                },
                {
                  type: 'text',
                  data: {
                    text: 'This is a basic email template created using EmailEditor.',
                  },
                  attributes: {
                    'data-testid': 'text',
                  },
                },
              ],
              attributes: {
                'data-testid': 'cell',
              },
            },
          ],
          attributes: {
            'data-testid': 'row',
          },
        },
      ],
      attributes: {
        'data-testid': 'container',
      },
    },
  }),
  templateSubject: 'Your Static Email Subject',
};

export interface IMailTemplateSectionProps extends WrappedComponentProps {
  accessToken: string;
  locale: string;
  setTeachingBubblePage(nextPage?: number);
  closeTeachingBubble(ev);
}

class MailTemplateSection extends React.Component<IMailTemplateSectionProps, {}> {
  editor: any;

  constructor(props) {
    super(props);
    this.editor = React.createRef();
  }

     private exportHtml() {
        this.setState({ loadSave: true });
        this.editor.current.editor.exportHtml((data) => {
            const { design, html } = data;
            this.props.dataProvider.updateMailTemplates(this.props.accessToken, this.state.templateType, html, JSON.stringify(design), this.state.templateSubject).then(() => {
                this.props.reloadMailTemplateFnc();
                this.props.okMessage();
                this.setState({ loadSave: false });
            });
        });
    }


  public render() {
    return (
      <div>
        {/* Your teaching bubble components go here */}
        <Header
          as='h3'
          content={this.props.intl.formatMessage({
            id: 'SettingsTab.MailTemplateSection.Title',
            defaultMessage: 'E-Mail templates',
          })}
        />
        {/* Render your UI components for the single email template here */}
        <p>
          <FormattedMessage id='SettingsTab.MailTemplateSection.ChooseTemplate' defaultMessage='Choose a template to edit:' />
        </p>
        <Button
          primary
          content={this.state.loadSave ? <Loader size={'small'} /> : <FormattedMessage id='Common.Save' defaultMessage='Save' />}
          onClick={() => {
            this.exportHtml();
          }}
        ></Button>
        <br />
        <Divider />
        <br />
        <Button
          primary
          content={<FormattedMessage id='SettingsTab.MailTemplateSection.ResetTemplate' defaultMessage='Reset Template' />}
          onClick={() => {
            // Reset logic remains the same
          }}
        ></Button>
        <br />
        <br />
        <br />
        {this.state.loadSave ? (
          <Loader />
        ) : (
          <>
            <Text size={'large'} content={<FormattedMessage id='SettingsTab.MailTemplateSection.MailSubjectLabel' defaultMessage='Mail Subject' />} />
            <br /> <br />
            <Input className={cssStyles.MailSubjectInput} inverted value={staticTemplate.templateSubject} />
            <br />
            <Text content={staticTemplate.templateSubject ? staticTemplate.templateSubject.length + ' / 90' : '0 / 90'} disabled />
            <br />
            <EmailEditor
              ref={this.editor}
              options={{
                locale: this.props.locale,
                features: {
                  preview: false, // Disable editing features for a static template
                  // Disable other features as needed
                },
              }}
              style={{ height: '800px', marginTop: '15px' }}
              initialValue={staticTemplate.templateJson}
            />
          </>
        )}
        <br />
        <Button
          primary
          content={this.state.loadSave ? <Loader size={'small'} /> : <FormattedMessage id='Common.Save' defaultMessage='Save' />}
          onClick={() => {
            this.exportHtml();
          }}
        ></Button>
      </div>
    );
  }
}

export default injectIntl<'intl', IMailTemplateSectionProps>(MailTemplateSection);
