# having no configuration throws an error, so we need this if we want to "disable" secure_headers in dev
SecureHeaders::OPT_OUT
# SecureHeaders::Configuration.default do |config|
#   config.cookies = {
#     secure: true, # mark all cookies as "Secure"
#     httponly: true, # mark all cookies as "HttpOnly"
#     samesite: {
#       lax: true # mark all cookies as SameSite=lax
#     }
#   }
#   # Add "; preload" and submit the site to hstspreload.org for best protection.
#   config.hsts = "max-age=#{6.months.to_i}"
#   config.x_frame_options = "DENY"
#   config.x_content_type_options = "nosniff"
#   config.x_xss_protection = "1; mode=block"
#   config.x_download_options = "noopen"
#   config.x_permitted_cross_domain_policies = "none"
#   config.referrer_policy = %w(origin-when-cross-origin strict-origin-when-cross-origin)
#   config.csp = {
#     # "meta" values. these will shape the header, but the values are not included in the header.
#     preserve_schemes: true, # default: false. Schemes are removed from host sources to save bytes and discourage mixed content.
#     disable_nonce_backwards_compatibility: true, # default: false. If false, `unsafe-inline` will be added automatically when using nonces. If true, it won't. See #403 for why you'd want this.

#     # directive values: these values will directly translate into source directives https: 'self'
#     default_src:    Rails.env.production? ? %w('none') : %w(http: 'self' 'unsafe-inline'),
#     base_uri:       %w('self'),
#     connect_src:    %w('self'),
#     font_src:       %w(https://fonts.gstatic.com),
#     form_action:    %w('self'),
#     img_src:        %w('self' data:),
#     script_src:     %w('self'),
#     style_src:      %w('self' https://fonts.googleapis.com),
#     upgrade_insecure_requests: true, # see https://www.w3.org/TR/upgrade-insecure-requests/
#   }
#   # Use the following if you have CSP issues locally with 
#   # tools like webpack-dev-server
#   if !Rails.env.production?
#     config.csp[:connect_src] << "*"
#   end
# end