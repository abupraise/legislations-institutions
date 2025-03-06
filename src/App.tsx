import { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import ImageSlider from './imageSlider';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const menuButton = document.getElementById('menu-button');
      
      if (isSidebarOpen && sidebar && menuButton && 
          !sidebar.contains(event.target as Node) && 
          !menuButton.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'origin', title: 'Origin of the European Union' },
    { id: 'legislative-role', title: 'The Legislative Role of the EU' },
    { id: 'relations', title: 'Relations with Other EU Institutions' },
    { id: 'comparison-ecowas', title: 'Comparison with ECOWAS Parliament' },
    { id: 'comparison-nigeria', title: 'Comparison with Nigerian Legislature' },
    { id: 'responsibilities', title: 'Scope of Responsibilities' },
    { id: 'conclusion', title: 'Conclusion' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Menu Button */}
      <button
        id="menu-button"
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-eu-yellow text-eu-blue md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav
        id="sidebar"
        className={`fixed top-0 left-0 h-full bg-eu-blue text-white w-64 transform transition-transform duration-300 ease-in-out z-40 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="p-6 mt-16 overflow-y-auto h-full pb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-bold text-2xl text-eu-yellow">CONTENTS</span>
          </div>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={`block py-2 px-4 hover:bg-eu-blue/80 rounded cursor-pointer transition-all
                    ${activeSection === section.id ? 'bg-eu-blue/80 border-l-4 border-eu-yellow' : ''}`}
                  onClick={() => {
                    setActiveSection(section.id);
                    if (window.innerWidth < 768) {
                      setIsSidebarOpen(false);
                    }
                  }}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="h-screen overflow-auto flex flex-col md:ml-64 transition-all duration-300 ease-in-out">
        <header className="sticky top-0 z-30 bg-eu-blue text-white py-6 shadow-lg flex justify-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            The Function of the European Union: Legislative and Institutional Relations
          </h1>
        </header>

        <div className="max-w-4xl mx-auto md:mx-8 space-y-12 p-6">
          <section id="introduction" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-eu-blue mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              The European Union (EU) is an alliance of political and economic nature with 27 member states in it. It works mainly by promoting financial teamwork, guaranteeing political steadiness, and by putting into action shared policies that help countries under its umbrella. Its role depends considerably on the legislative process, which determines policies and laws affecting over 440 million citizens in the EU.
            </p>
          </section>

          <section id="origin" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-eu-blue mb-4">Origin of the European Union</h2>
            <p className="text-gray-700 leading-relaxed">
              The EU traces its origins to the European Coal and Steel Community (ECSC), which was jointly founded in 1951 by Robert Schuman and Jean Monnet. The ECSC was initially named “Communauté Européenne du Charbon et de l'Acier”.
            </p><p className="text-gray-700 leading-relaxed mt-2">
              Robert Schuman used to be the Prime Minister of France and he was a French statesman. He was important to Europe achieving renewed amity after the second world war. Monnet, of France, a merchant and diplomat, was exceptionally instrumental in developing the concept of European economic integration. Their idea included establishing financial reliance between Germany and France, guaranteeing continuous peace by jointly overseeing the steel and coal production. This coalition laid the foundation toward European integration, evolving into the European Economic Community (EEC) as well as later into the European Union.
            </p>
          </section>

          <section id="legislative-role" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-eu-blue mb-4">The Legislative Role of the EU</h2>
            <p className="text-gray-700 leading-relaxed">
              The EU's lawmaking relies chiefly on three main institutions: the European Commission (EC),
              the European Parliament (EP), and the Council of the European Union.
              Working hand-in-hand, they create, propose, and enact laws and policies that govern many
              areas in countries that are members.
            </p>
            <ul className="list-disc list-outside pl-5 text-gray-700 leading-relaxed space-y-4 mt-4">
              <li>
                <strong>European Commission (EC)</strong><br />
                The European Commission functions as its executive and is the sole body that can propose laws.
                It ensures that laws are in accordance with the EU’s treaties and broad aims, such as economic expansion, ecological sustainability, and digital change.
                Once a law is initially proposed, it is carefully reviewed as well as further amended by both the European Parliament. In addition to that, the Council also further amends the law.
              </li>

              <li>
                <strong>European Parliament (EP)</strong><br />
                The European Parliament, entirely composed of directly elected representatives out of each of the member states, plays a truly meaningful role in the shaping of legislation.
                It adheres to the typical law-making procedure, involving debates, changes, and either approval or rejection of suggested statutes.
                The Parliament also keeps tabs on other EU organizations and signs off on the EU's spending plan in the process.
              </li>

              <li>
                <strong>Council of the European Union</strong><br />
                The Council is a representation of the governments of member states and has a meaningful part in settling policies and in choosing what to do.
                It approves and amends laws that are proposed by the Commission, often with the backing from the Parliament.
                The Council’s voting system varies according to each individual subject matter. Certain decisions require a qualified majority, while other decisions need unanimous approval.
              </li>
            </ul>
          </section>

          <section id="relations" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-eu-blue mb-4">Relations with Other EU Institutions</h2>
            <p className="text-gray-700 leading-relaxed">
              The EU legislative framework is carefully constructed to balance authority among establishments, thus guaranteeing representation of national governments and European people.
              <span className='block mt-2 mb-2'><b>European Council:</b> Sets the political direction of the EU but does not have legislative power.</span>
              <span className='block'><b>Court of Justice of the European Union (CJEU):</b> Ensures that EU laws are interpreted and applied consistently across member states.
              </span>
              <span className='block mt-2'><b>European Central Bank (ECB):</b> Regulates monetary policy within the Eurozone and influences financial legislation.
              </span></p>
          </section>

          <section id="comparison-ecowas" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-eu-blue mb-4">Comparison with the ECOWAS Parliament</h2>
            <p className="text-gray-700 leading-relaxed">
              Similar to the European Parliament, the Economic Community of West African States (ECOWAS)
              Parliament is also a regional legislative arm to the ECOWAS regions and has its head office in Abuja,
              Nigeria. Although there are fundamental differences.
            </p>
            <ul className="list-disc list-outside pl-5 text-gray-700 leading-relaxed space-y-2 mt-4">
              <li>
                The ECOWAS Parliament, like the European Parliament, is mainly consultative, while the latter exercises
                legislative authority on matters pertaining to trade, digital policy, as well as environmental policy,
                which is not the case for the former.
              </li>
              <li>
                The parliament’s decisions are not legally enforceable to member states, unlike the decisions taken
                by the European Parliament which integrates the law for the entire block.
              </li>
              <li>
                Parliament’s members are not chosen directly like the MEPs (Members of the European Parliament,) but
                instead appointed by respective national administrations.
              </li>
            </ul>
          </section>

          <section id="comparison-nigeria" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-eu-blue mb-4">Comparison with the Nigerian Legislature</h2>
            <p className="text-gray-700 leading-relaxed">
            The European Parliament also has some likenesses as well as differences with the legislature of Nigeria:
            </p>
            <ul className="list-disc list-outside pl-5 text-gray-700 leading-relaxed space-y-4 mt-4">

              <li>
                <span className="font-bold">Senate of Nigeria:</span>
                <p className="mt-1">
                Both the Nigerian Senate and the European Parliament examine policies and laws, but the former works under a regional system as dictated by the Nigerian Constitution.
                <p className="mt-1">While the Senate looks after the interests of federating states, the European Parliament looks after the citizens of the European Union from different countries.
                </p><p className='mt-1'>Unlike the European Parliament, who cannot remove the President of the European Commission directly but can only pass a vote of no confidence, the Nigerian Senate has the power to impeach the President and to approve or disapprove of executive office holders.
                </p>
                </p>
              </li>

              <li>
                <span className="font-bold">House of Representatives of Nigeria:</span>
                <p className="mt-1">
                Like the European Parliament, the Nigerian House of Representatives is made of elected individuals (politicians) who introduce new laws and are responsible for the changing of laws.
                </p>
                <p className="mt-1">
                The House of Representatives, however, only champions Nigerian laws, as the European Parliament deals with a number of countries and formulates policies that apply to the whole of the European Union.                </p>
                <p className="mt-1">
                Legislative authority in Nigeria is completely centralized, while laws of the EU need the combination of more than one institution, and the cooperation of national governments.                </p>
              </li>
            </ul>
          </section>

          <section id="responsibilities" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-eu-blue mb-4">Scope of Responsibilities of the European Parliament in the Legislative Activity</h2>
            <p className="text-gray-700 leading-relaxed">
            The European Parliament plays a crucial role in the legislative process, working alongside the Council to adopt laws.
            </p>
            <ul className="list-disc list-outside pl-5 text-gray-700 leading-relaxed space-y-4 mt-4">
              <li>
                <p className="mt-1">
                The European Parliament can make suggestions to change legislation and has the right to veto parts of it in certain areas of policy.                </p>
                </li>
                <li>
                  <p className="mt-1">The Parliament debates policies that affect European citizens, such as climate change regulations, digital rights, and trade agreements.
                </p>
                </li>
                <li>
                <p className='mt-1'>Unlike the European Parliament, who cannot remove the President of the European Commission directly but can only pass a vote of no confidence, the Nigerian Senate has the power to impeach the President and to approve or disapprove of executive office holders.
                </p>
              </li>
            </ul>
          </section>

          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-eu-blue mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              In summary, the European Union’s legislative system is complex in the sense that it integrates both national and European governance. While the European Parliament guarantees democratic accountability, the European Commission and Council construct and execute policies.
            </p><p className="text-gray-700 leading-relaxed mt-2">
              These processes must be understood to fully understand the EU’s impact on governance, economic strategies, and diplomacy. Furthermore, juxtaposing the European Parliament with the Parliament of ECOWAS and the Nigerian National Assembly shows how both regional and national legislative bodies function within divergent scopes of authority and jurisdiction.
            </p>
          </section>
        </div>
      </div>
      {/* Right Side Static Image Section */}
      <ImageSlider />
    </div>
  );
}

export default App;