module Jekyll
  module AssetFilter
    def asset_url(input)
      sha = `git log -n 1`.match(/^commit\ ([a-z0-9]+)$/m)[1] 
      "#{@context.registers[:site].config['url']}/#{input}?#{sha}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
