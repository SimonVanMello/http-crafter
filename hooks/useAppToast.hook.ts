import Toast, { ToastType } from 'react-native-toast-message';
import { useTranslation } from 'react-i18next';

const useAppToast = () => {
  const { t } = useTranslation();

  const showToast = (type: ToastType, description: string) => {
    Toast.show({
      type,
      text1: t(`common.toasts.${type}`),
      text2: description,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 60,
      bottomOffset: 40,
    });
  };

  return {
    success: (description: string) => showToast('success', description),
    error: (description?: string) =>
      showToast('error', description || t('common.toasts.errorDescription')),
    info: (description: string) => showToast('info', description),
  };
};

export default useAppToast;
