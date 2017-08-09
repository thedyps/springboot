package xyz.thedyps.project.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import xyz.thedyps.project.springboot.service.PcListService;

@Controller
public class PcListController {
	
	@Autowired
	PcListService service;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(@RequestParam(value="pcType", required=false, defaultValue="Office") String pcType, Model model)
			throws Exception {
		model.addAttribute("pcListCount", service.getPcListCount(pcType));
		model.addAttribute("pcList", service.getPcList(pcType, 1, 10));
		model.addAttribute("pcFilterListVO",  service.getPcFilterList());
		return "pcList";
	}
}
