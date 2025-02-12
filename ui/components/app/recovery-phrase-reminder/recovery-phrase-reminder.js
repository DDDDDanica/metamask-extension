import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useI18nContext } from '../../../hooks/useI18nContext';
// Components
import Box from '../../ui/box';
import Button from '../../ui/button';
import Popover from '../../ui/popover';
import Typography from '../../ui/typography';
// Helpers
import {
  COLORS,
  DISPLAY,
  TEXT_ALIGN,
  TYPOGRAPHY,
  BLOCK_SIZES,
  FONT_WEIGHT,
  JUSTIFY_CONTENT,
} from '../../../helpers/constants/design-system';
import { ONBOARDING_UNLOCK_ROUTE } from '../../../helpers/constants/routes';

export default function RecoveryPhraseReminder({ onConfirm, hasBackedUp }) {
  const t = useI18nContext();
  const history = useHistory();

  const handleBackUp = () => {
    history.push(ONBOARDING_UNLOCK_ROUTE);
  };

  return (
    <Popover centerTitle title={t('recoveryPhraseReminderTitle')}>
      <Box
        paddingRight={4}
        paddingBottom={6}
        paddingLeft={4}
        className="recovery-phrase-reminder"
      >
        <Typography
          color={COLORS.TEXT_DEFAULT}
          align={TEXT_ALIGN.CENTER}
          variant={TYPOGRAPHY.Paragraph}
          boxProps={{ marginTop: 0, marginBottom: 4 }}
        >
          {t('recoveryPhraseReminderSubText')}
        </Typography>
        <Box marginTop={4} marginBottom={8}>
          <ul className="recovery-phrase-reminder__list">
            <li>
              <Typography
                as="span"
                color={COLORS.TEXT_DEFAULT}
                fontWeight={FONT_WEIGHT.BOLD}
              >
                {t('recoveryPhraseReminderItemOne')}
              </Typography>
            </li>
            <li>{t('recoveryPhraseReminderItemTwo')}</li>
            <li>
              {hasBackedUp ? (
                t('recoveryPhraseReminderHasBackedUp')
              ) : (
                <>
                  {t('recoveryPhraseReminderHasNotBackedUp')}
                  <Box display={DISPLAY.INLINE_BLOCK} marginLeft={1}>
                    <Button
                      type="link"
                      onClick={handleBackUp}
                      style={{
                        fontSize: 'inherit',
                        padding: 0,
                      }}
                    >
                      {t('recoveryPhraseReminderBackupStart')}
                    </Button>
                  </Box>
                </>
              )}
            </li>
          </ul>
        </Box>
        <Box justifyContent={JUSTIFY_CONTENT.CENTER}>
          <Box width={BLOCK_SIZES.TWO_FIFTHS}>
            <Button type="primary" onClick={onConfirm}>
              {t('recoveryPhraseReminderConfirm')}
            </Button>
          </Box>
        </Box>
      </Box>
    </Popover>
  );
}

RecoveryPhraseReminder.propTypes = {
  hasBackedUp: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
