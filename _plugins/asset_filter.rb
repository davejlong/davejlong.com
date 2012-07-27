module Jekyll
  module AssetFilter
    def asset_url(input)
      "#{@context.registers[:site].config['url']}/#{input}?#{Time.now.to_i}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
