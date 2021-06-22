package com.naverntstemplate;

import android.content.res.Configuration;

import androidx.annotation.NonNull;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  public void onConfigurationChanged(@NonNull Configuration configuration) {
    super.onConfigurationChanged(configuration);
    getReactInstanceManager()
      .onConfigurationChanged(this, configuration);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "NaveRNTSTemplate";
  }
}
