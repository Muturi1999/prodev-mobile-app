import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from '@/constants';
import { styles } from '@/styles/_joinstyle';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Image source={HEROLOGOGREEN} />
        <Text style={{ fontWeight: '600', fontSize: 24 }}>Sign In</Text>
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Welcome Back</Text>
        <Text style={styles.subText}>Login to your ProDev account</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="you@email.com" keyboardType="email-address" />
        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput style={styles.passwordControl} secureTextEntry={true} placeholder="Enter your password" />
        </View>
      </View>

      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <Pressable style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Sign in with Google</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Sign in with Facebook</Text>
        </Pressable>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don’t have an account? </Text>
        <Text style={styles.signupSubTitleText}>Join now</Text>
      </View>
    </View>
  );
}
