import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from '@/constants';
import { styles } from '@/styles/_joinstyle';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

export default function JoinScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Image source={HEROLOGOGREEN} />
        <Text style={{ fontWeight: '600', fontSize: 24 }}>Join</Text>
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create an Account</Text>
        <Text style={styles.subText}>Start learning and building today!</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput style={styles.formControl} placeholder="e.g. Jane Doe" />
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="you@email.com" keyboardType="email-address" />
        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput style={styles.passwordControl} secureTextEntry={true} placeholder="Enter your password" />
        </View>
      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join Now</Text>
      </Pressable>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <Pressable style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Join with Google</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Join with Facebook</Text>
        </Pressable>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Text style={styles.signupSubTitleText}>Sign in</Text>
      </View>
    </View>
  );
}
