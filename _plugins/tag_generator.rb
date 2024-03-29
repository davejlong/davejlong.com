module Jekyll
  class TagIndex < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'blog-tag.html')
      self.data['tag'] = tag

      tag_title_prefix = site.config['tag_title_prefix'] || 'Tag / '
      self.data['title'] = "#{tag}"
    end
  end

  class TagGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'blog-tag'
        dir = site.config['tag_dir'] || 'tags/'
        site.tags.keys.each do |tag|
          write_tag_index(site, File.join(dir, tag.gsub(/ /, '-').downcase), tag)
        end
      end
    end

    def write_tag_index(site, dir, tag)
      index = TagIndex.new(site, site.source, dir, tag)
      index.render(site.layouts, site.site_payload)
      index.write(site.dest)
      site.pages << index
    end
  end
end
